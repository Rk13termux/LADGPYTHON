/* ==========================================================================
   CHMODX - Python 3 de 0 a MASTER
   Landing page interactions
   ========================================================================== */
(function () {
    'use strict';

    var STORAGE_KEY = 'chmodx_offer_deadline';
    var OFFER_WINDOW_HOURS = 48; // duración de la oferta desde la primera visita

    /* ----------------------------------------------------------------
       Countdown: fecha límite persistente (cada visitante conserva su ventana)
       ---------------------------------------------------------------- */
    function getDeadline() {
        var stored = null;
        try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { stored = null; }

        if (stored) {
            var ts = parseInt(stored, 10);
            if (!isNaN(ts) && ts > Date.now()) return ts;
        }

        var deadline = Date.now() + OFFER_WINDOW_HOURS * 60 * 60 * 1000;
        try { localStorage.setItem(STORAGE_KEY, String(deadline)); } catch (e) {}
        return deadline;
    }

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    function updateCountdowns() {
        var deadline = getDeadline();
        var diff = deadline - Date.now();
        if (diff < 0) diff = 0;

        var totalSeconds = Math.floor(diff / 1000);
        var days = Math.floor(totalSeconds / 86400);
        var hours = Math.floor((totalSeconds % 86400) / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;

        var values = {
            days: pad(days),
            hours: pad(hours),
            minutes: pad(minutes),
            seconds: pad(seconds)
        };

        document.querySelectorAll('.countdown-value').forEach(function (el) {
            var unit = el.getAttribute('data-unit');
            if (unit && values.hasOwnProperty(unit) && el.textContent !== values[unit]) {
                el.textContent = values[unit];
            }
        });
    }

    /* ----------------------------------------------------------------
       Chart bars: animación al entrar en pantalla
       ---------------------------------------------------------------- */
    function animateChart() {
        var bars = document.querySelectorAll('.chart-bar');
        bars.forEach(function (bar) {
            var width = bar.getAttribute('data-width') || '0%';
            // pequeño retardo escalonado
            var index = Array.prototype.indexOf.call(bars, bar);
            setTimeout(function () {
                bar.style.width = width;
            }, index * 120);
        });
    }

    /* ----------------------------------------------------------------
       Reveal on scroll
       ---------------------------------------------------------------- */
    function initReveal() {
        var targets = document.querySelectorAll(
            '.section-header, .why-card, .achieve-card, .module-item, ' +
            '.testimonial, .instructor-info, .instructor-avatar-wrap, ' +
            '.offer-card, .quote-card, .faq-item, .requirement-item, ' +
            '.social-item, .ranking-chart, .termux-card, .termux-terminal, ' +
            '.community-body, .community-list'
        );

        if (!('IntersectionObserver' in window)) {
            targets.forEach(function (t) { t.classList.add('visible'); });
            animateChart();
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        targets.forEach(function (t) {
            t.classList.add('reveal');
            observer.observe(t);
        });

        // Chart animation triggered separately when visible
        var chart = document.querySelector('.ranking-chart');
        if (chart) {
            var chartObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateChart();
                        chartObserver.disconnect();
                    }
                });
            }, { threshold: 0.3 });
            chartObserver.observe(chart);
        }
    }

    /* ----------------------------------------------------------------
       Sticky mobile CTA
       ---------------------------------------------------------------- */
    function initStickyCta() {
        var sticky = document.getElementById('stickyCta');
        if (!sticky) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 600) {
                sticky.classList.add('visible');
            } else {
                sticky.classList.remove('visible');
            }
        }, { passive: true });
    }

    /* ----------------------------------------------------------------
       Back to top
       ---------------------------------------------------------------- */
    function initBackToTop() {
        var btn = document.getElementById('backToTop');
        if (!btn) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }, { passive: true });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ----------------------------------------------------------------
       Mobile menu
       ---------------------------------------------------------------- */
    function initMobileMenu() {
        var toggle = document.getElementById('navToggle');
        var menu = document.getElementById('mobileMenu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function () {
            menu.classList.toggle('open');
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('open');
            });
        });
    }

    /* ----------------------------------------------------------------
       Smooth scroll (con compensación del header)
       ---------------------------------------------------------------- */
    function initSmoothScroll() {
        var header = document.querySelector('.header');
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var id = this.getAttribute('href');
                if (id === '#' || id.length < 2) return;
                var target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                var offset = header ? header.offsetHeight + 10 : 0;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            });
        });
    }

    /* ----------------------------------------------------------------
       Navegadores internos (TikTok, Instagram, Facebook...)
       Los WebView de esas apps bloquean go.hotmart.com y t.me. Aqui el
       enlace se entrega al sistema operativo (que lo abre fuera del
       WebView) y, si la app no lo permite, se explica al visitante
       como salir y se le ofrece copiar el enlace.
       ---------------------------------------------------------------- */
    var APPS_INTERNAS = [
        { nombre: 'TikTok',    menu: true,  re: /TikTok|BytedanceWebview|musical_ly|Bytedance|Aweme|com\.zhiliaoapp/i },
        { nombre: 'Instagram', menu: true,  re: /Instagram/i },
        { nombre: 'Facebook',  menu: true,  re: /FBAN|FBAV|FB_IAB/i },
        { nombre: 'Pinterest', menu: true,  re: /Pinterest/i },
        { nombre: 'Snapchat',  menu: true,  re: /Snapchat/i },
        { nombre: 'LinkedIn',  menu: true,  re: /LinkedInApp/i },
        { nombre: 'X',         menu: true,  re: /\bTwitter\b/i },
        { nombre: 'WhatsApp',  menu: false, re: /WhatsApp/i },
        { nombre: 'LINE',      menu: false, re: /\bLine\//i }
    ];

    var AVISO_KEY = 'chmodx_inapp_aviso';
    var aviso = { url: '', tipo: '', deeplink: '' };
    var appInterna = null;

    function detectarNavegadorInterno() {
        var ua = navigator.userAgent || '';
        for (var i = 0; i < APPS_INTERNAS.length; i++) {
            if (APPS_INTERNAS[i].re.test(ua)) {
                return { nombre: APPS_INTERNAS[i].nombre, menu: APPS_INTERNAS[i].menu };
            }
        }
        // WebView generico sin navegador propio
        if (/Android/i.test(ua) && /\bwv\b/.test(ua)) return { nombre: 'esta aplicación', menu: false };
        if (/(iPhone|iPad|iPod)/i.test(ua) && !/Safari/i.test(ua)) return { nombre: 'esta aplicación', menu: false };
        return null;
    }

    function dominioDe(url) {
        var m = /^https?:\/\/([^\/?#]+)/i.exec(url);
        return m ? m[1].toLowerCase().replace(/:\d+$/, '') : '';
    }

    function tipoDeEnlace(url) {
        var host = dominioDe(url);
        if (!host) return '';
        if (/(^|\.)t\.me$/.test(host) || /(^|\.)telegram\.(me|org)$/.test(host)) return 'telegram';
        if (/(^|\.)hotmart\.com$/.test(host) || /(^|\.)hotmart\.com\.br$/.test(host)) return 'hotmart';
        return '';
    }

    /* Convierte una URL https en un intent: el WebView no la carga, se la
       entrega al sistema y este la abre en el navegador real del usuario. */
    function urlIntent(url) {
        return 'intent://' + url.replace(/^https?:\/\//i, '') +
               '#Intent;scheme=https' +
               ';action=android.intent.action.VIEW' +
               ';category=android.intent.category.BROWSABLE;end';
    }

    function enlaceMasCercano(nodo) {
        while (nodo && nodo !== document) {
            if (nodo.tagName === 'A' && nodo.getAttribute('href')) return nodo;
            nodo = nodo.parentNode;
        }
        return null;
    }

    /* Deep link nativo de Telegram: se usa el que declare el enlace o,
       si no lo trae, se deduce de la URL publica. */
    function deeplinkDeTelegram(a, url) {
        var propio = a.getAttribute('data-deeplink');
        if (propio) return propio;
        var m = /^https?:\/\/(?:t\.me|telegram\.me)\/@?([A-Za-z0-9_]+)/i.exec(url);
        return m ? 'tg://resolve?domain=' + m[1] : '';
    }

    function avisoYaVisto() {
        try { return sessionStorage.getItem(AVISO_KEY) === '1'; } catch (e) { return false; }
    }

    function marcarAvisoVisto() {
        try { sessionStorage.setItem(AVISO_KEY, '1'); } catch (e) {}
    }

    /* Copia con los dos mecanismos: la API moderna falla en muchos WebView
       (o exige contexto seguro y foco), asi que siempre queda el plan B. */
    function copiarLegado(texto) {
        try {
            var area = document.createElement('textarea');
            area.value = texto;
            area.setAttribute('readonly', '');
            area.style.position = 'fixed';
            area.style.top = '-1000px';
            area.style.opacity = '0';
            document.body.appendChild(area);
            area.focus();
            area.select();
            if (area.setSelectionRange) area.setSelectionRange(0, texto.length);
            var ok = document.execCommand('copy');
            document.body.removeChild(area);
            return ok;
        } catch (e) {
            return false;
        }
    }

    function copiarAlPortapapeles(texto, boton) {
        var etiqueta = boton ? boton.innerHTML : '';
        var yaAviso = false;

        var confirmar = function (ok) {
            if (!boton || yaAviso) return;
            yaAviso = true;
            boton.innerHTML = ok
                ? '<i class="fas fa-check" aria-hidden="true"></i> Enlace copiado'
                : '<i class="fas fa-triangle-exclamation" aria-hidden="true"></i> Copia el enlace de abajo';
            setTimeout(function () { boton.innerHTML = etiqueta; }, 2600);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto).then(
                function () { confirmar(true); },
                function () { confirmar(copiarLegado(texto)); }
            );
            return;
        }
        confirmar(copiarLegado(texto));
    }

    function mostrarAviso(url, tipo, deeplink) {
        var modal = document.getElementById('inappModal');
        if (!modal) return;

        var esAndroid = /Android/i.test(navigator.userAgent || '');
        var destino = url || aviso.url || (location.origin + location.pathname);
        var tipoFinal = tipo || aviso.tipo || '';

        aviso.url = destino;
        if (tipoFinal) aviso.tipo = tipoFinal;
        if (deeplink) aviso.deeplink = deeplink;

        var elApp = document.getElementById('inappApp');
        if (elApp) elApp.textContent = appInterna ? appInterna.nombre : 'una aplicación';

        var elUrl = document.getElementById('inappUrl');
        if (elUrl) elUrl.textContent = destino;

        // el paso del menu solo tiene sentido en apps con menu propio
        var pasos = document.getElementById('inappSteps');
        if (pasos) {
            var itemMenu = pasos.querySelector('[data-step="menu"]');
            if (itemMenu) itemMenu.style.display = (appInterna && appInterna.menu) ? '' : 'none';
        }

        var btnTry = document.getElementById('inappTry');
        var btnTg = document.getElementById('inappTg');
        var btnCopiar = document.getElementById('inappCopy');

        // En Android el intent si saca al usuario al navegador real.
        // En iOS no existe un mecanismo equivalente, asi que se prioriza copiar.
        if (btnTry) btnTry.hidden = !esAndroid;
        if (btnCopiar) {
            if (esAndroid) {
                btnCopiar.classList.remove('btn-primary');
                btnCopiar.classList.add('btn-outline');
            } else {
                btnCopiar.classList.remove('btn-outline');
                btnCopiar.classList.add('btn-primary');
            }
        }
        if (btnTg) btnTg.hidden = tipoFinal !== 'telegram';

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        marcarAvisoVisto();

        var cerrar = document.getElementById('inappClose');
        if (cerrar) setTimeout(function () { cerrar.focus(); }, 260);
    }

    function cerrarAviso() {
        var modal = document.getElementById('inappModal');
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    /* Intenta sacar al visitante del WebView. Si la app lo bloquea, la
       pagina sigue visible y entonces se muestra el aviso. */
    function salirDelWebView(url, tipo, deeplink) {
        var esAndroid = /Android/i.test(navigator.userAgent || '');
        var salio = false;

        var marco = function () {
            if (document.visibilityState === 'hidden') salio = true;
        };
        document.addEventListener('visibilitychange', marco);
        window.addEventListener('pagehide', marco);

        if (esAndroid) {
            window.location.href = urlIntent(url);
        } else if (tipo === 'telegram' && deeplink) {
            window.location.href = deeplink;
        } else {
            // iOS sin esquema nativo: no hay forma programatica de salir
            setTimeout(function () {
                if (!salio) mostrarAviso(url, tipo, deeplink);
            }, 260);
            return;
        }

        setTimeout(function () {
            document.removeEventListener('visibilitychange', marco);
            window.removeEventListener('pagehide', marco);
            if (!salio && document.visibilityState === 'visible') mostrarAviso(url, tipo, deeplink);
        }, 1400);
    }

    function initEnlacesExternos() {
        appInterna = detectarNavegadorInterno();
        var modal = document.getElementById('inappModal');

        if (modal) {
            var cerrar = document.getElementById('inappClose');
            if (cerrar) cerrar.addEventListener('click', cerrarAviso);

            modal.addEventListener('click', function (e) {
                if (e.target && e.target.hasAttribute && e.target.hasAttribute('data-inapp-close')) cerrarAviso();
            });

            var btnTry = document.getElementById('inappTry');
            if (btnTry) {
                btnTry.addEventListener('click', function () {
                    if (/Android/i.test(navigator.userAgent || '')) window.location.href = urlIntent(aviso.url);
                });
            }

            var btnTg = document.getElementById('inappTg');
            if (btnTg) {
                btnTg.addEventListener('click', function () {
                    window.location.href = aviso.deeplink || 'tg://resolve?domain=chmodxcode';
                });
            }

            var btnCopiar = document.getElementById('inappCopy');
            if (btnCopiar) {
                btnCopiar.addEventListener('click', function () {
                    copiarAlPortapapeles(aviso.url, btnCopiar);
                });
            }

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && modal.classList.contains('open')) cerrarAviso();
            });
        }

        // Aviso informativo: dentro de un WebView casi nada funciona, asi que
        // se explica una vez por sesion.
        if (appInterna && !avisoYaVisto()) {
            setTimeout(function () { mostrarAviso('', '', ''); }, 1400);
        }

        document.addEventListener('click', function (e) {
            if (e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            if (!appInterna) return;                      // navegador normal: nada que hacer

            var a = enlaceMasCercano(e.target);
            if (!a) return;

            var url = a.getAttribute('href') || '';
            if (!/^https?:\/\//i.test(url)) return;

            var tipo = tipoDeEnlace(url);
            if (!tipo) return;                            // solo los enlaces bloqueados

            var deeplink = tipo === 'telegram' ? deeplinkDeTelegram(a, url) : '';

            e.preventDefault();
            salirDelWebView(url, tipo, deeplink);
        }, false);
    }

    /* ----------------------------------------------------------------
       Init
       ---------------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', function () {
        updateCountdowns();
        setInterval(updateCountdowns, 1000);

        initReveal();
        initStickyCta();
        initBackToTop();
        initMobileMenu();
        initSmoothScroll();
        initEnlacesExternos();
    });
})();
