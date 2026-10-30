/* ==========================================================================
   CHMODX · Captura de analítica
   Envía una fila a Supabase por cada página vista y expone CX.trackLead().
   Sin dependencias. Si falta configuración o el visitante usa Do Not Track,
   el script no hace nada.
   ========================================================================== */
(function () {
    'use strict';

    var config = window.CX_CONFIG || {};
    var baseUrl = String(config.url || '').replace(/\/+$/, '');
    var publicKey = String(config.key || '');

    var host = location.hostname;
    var isLocal =
        !host ||
        host === 'localhost' ||
        host === '127.0.0.1' ||
        host === '0.0.0.0' ||
        host === '[::1]' ||
        location.protocol === 'file:';

    var dnt =
        navigator.doNotTrack === '1' ||
        window.doNotTrack === '1' ||
        navigator.msDoNotTrack === '1';

    var enabled = Boolean(baseUrl && publicKey) && !isLocal && !dnt;

    /* ---------------------------------------------------------------- almacén */
    function read(storage, key) {
        try {
            return storage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function write(storage, key, value) {
        try {
            storage.setItem(key, value);
        } catch (error) {
            /* modo privado o almacenamiento lleno */
        }
    }

    function randomId(prefix) {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
            return prefix + window.crypto.randomUUID().replace(/-/g, '').slice(0, 16);
        }
        return prefix + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    }

    function visitorId() {
        var id = read(localStorage, 'cx_visitor');
        if (!id) {
            id = randomId('v_');
            write(localStorage, 'cx_visitor', id);
        }
        return id;
    }

    /* ------------------------------------------------------------- atribución */
    function session() {
        var params = new URLSearchParams(location.search);
        var incoming = {
            utm_source: params.get('utm_source'),
            utm_medium: params.get('utm_medium'),
            utm_campaign: params.get('utm_campaign'),
            utm_content: params.get('utm_content')
        };
        var hasIncoming = Object.keys(incoming).some(function (name) {
            return Boolean(incoming[name]);
        });

        var data = null;
        var raw = read(sessionStorage, 'cx_session');
        if (raw) {
            try {
                data = JSON.parse(raw);
            } catch (error) {
                /* sesión corrupta: se regenera */
            }
        }

        if (!data) {
            data = {
                id: randomId('s_'),
                utm_source: null,
                utm_medium: null,
                utm_campaign: null,
                utm_content: null
            };
        }

        /* Los CTA internos llegan con UTM a una página nueva: se adopta la
           atribución más reciente sin perder la de una campaña externa. */
        if (hasIncoming) {
            data.utm_source = incoming.utm_source || data.utm_source;
            data.utm_medium = incoming.utm_medium || data.utm_medium;
            data.utm_campaign = incoming.utm_campaign || data.utm_campaign;
            data.utm_content = incoming.utm_content || data.utm_content;
        }

        write(sessionStorage, 'cx_session', JSON.stringify(data));
        return data;
    }

    /* ---------------------------------------------------------------- envío */
    function headers(prefer) {
        return {
            apikey: publicKey,
            Authorization: 'Bearer ' + publicKey,
            'Content-Type': 'application/json',
            Prefer: prefer || 'return=minimal'
        };
    }

    function post(path, payload, prefer) {
        return fetch(baseUrl + '/rest/v1/' + path, {
            method: 'POST',
            headers: headers(prefer),
            body: JSON.stringify(payload),
            keepalive: true,
            credentials: 'omit'
        });
    }

    function pageview() {
        if (!enabled) {
            return;
        }

        var current = session();
        var base = {
            path: location.pathname,
            referrer: document.referrer || null,
            device:
                window.matchMedia && window.matchMedia('(max-width: 768px)').matches
                    ? 'mobile'
                    : 'desktop',
            visitor_id: visitorId()
        };

        var full = Object.assign({}, base, {
            session_id: current.id,
            utm_source: current.utm_source,
            utm_medium: current.utm_medium,
            utm_campaign: current.utm_campaign,
            utm_content: current.utm_content,
            language: navigator.language || null
        });

        post('page_views', full)
            .then(function (response) {
                /* 400 = columnas de UTM todavía sin crear: se guarda lo básico. */
                if (response.status === 400) {
                    return post('page_views', base);
                }
                return null;
            })
            .catch(function () {
                /* La analítica nunca debe romper la página. */
            });
    }

    /* ---------------------------------------------------------------- leads */
    function trackLead(email, source) {
        if (!enabled || !email) {
            return Promise.resolve({ ok: false, reason: 'disabled' });
        }

        var payload = {
            email: String(email).trim().toLowerCase(),
            source: source || 'web'
        };

        /* Sin upsert: la política RLS solo permite INSERT. Un 409 significa
           que el correo ya estaba suscrito, que también es un éxito. */
        return post('leads', payload)
            .then(function (response) {
                return { ok: response.ok || response.status === 409, status: response.status };
            })
            .catch(function () {
                return { ok: false, reason: 'network' };
            });
    }

    window.CX = {
        enabled: enabled,
        visitorId: visitorId,
        trackLead: trackLead,
        trackPageview: pageview
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', pageview);
    } else {
        pageview();
    }
})();
