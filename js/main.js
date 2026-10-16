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
       entrega al sistema y este la abre en el navegador real del usuario.
       Si se indica un paquete, Android abre esa app concreta (Chrome);
       si no, deja que la abra el navegador predeterminado. */
    function urlIntent(url, paquete) {
        return 'intent://' + url.replace(/^https?:\/\//i, '') +
               '#Intent;scheme=https' +
               (paquete ? ';package=' + paquete : '') +
               ';action=android.intent.action.VIEW' +
               ';category=android.intent.category.BROWSABLE;end';
    }

    var ESPERA_INTENT = 700;   // margen para que el sistema abra la otra app

    /* Saca al visitante del WebView en Android. Primero se fuerza Chrome,
       como pediste; si el telefono no lo tiene instalado, se reintenta sin
       fijar aplicacion para que lo abra el navegador predeterminado. Si aun
       asi la pagina sigue visible, se llama a alFallar. */
    function abrirFueraDelWebView(url, alFallar) {
        var destino = url || (location.origin + location.pathname);
        var seFue = false;
        var paso = 0;

        var marco = function () {
            if (document.visibilityState === 'hidden') seFue = true;
        };
        document.addEventListener('visibilitychange', marco);
        window.addEventListener('pagehide', marco);

        var intento = function () {
            if (seFue) return;
            window.location.href = urlIntent(destino, paso === 0 ? 'com.android.chrome' : '');
            paso++;

            if (paso < 2) {                 // reintento sin paquete
                setTimeout(intento, ESPERA_INTENT);
                return;
            }
            setTimeout(function () {        // ni Chrome ni el predeterminado
                document.removeEventListener('visibilitychange', marco);
                window.removeEventListener('pagehide', marco);
                if (!seFue && alFallar) alFallar();
            }, ESPERA_INTENT);
        };

        intento();
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
            if (ok) {
                boton.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> ¡Copiado! Pégalo en tu navegador';
                boton.style.backgroundColor = '#00ff66';
                boton.style.color = '#000000';
            } else {
                boton.innerHTML = '<i class="fas fa-triangle-exclamation" aria-hidden="true"></i> Copia el enlace de abajo';
            }
            setTimeout(function () {
                boton.innerHTML = etiqueta;
                boton.style.backgroundColor = '';
                boton.style.color = '';
            }, 2600);
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

        var estado = document.getElementById('inappStatus');
        if (estado) {
            estado.hidden = true;
            estado.textContent = '';
        }

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
        // el canal sirve de alternativa de contacto en cualquier caso,
        // aunque el enlace pulsado fuera el del curso
        if (btnTg) btnTg.hidden = false;

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
        var avisar = function () { mostrarAviso(url, tipo, deeplink); };

        if (esAndroid) {
            abrirFueraDelWebView(url, avisar);
            return;
        }

        // iOS: el WebView no deja lanzar otra app, solo se puede intentar
        // el esquema nativo de Telegram
        var salio = false;
        var marco = function () {
            if (document.visibilityState === 'hidden') salio = true;
        };
        document.addEventListener('visibilitychange', marco);
        window.addEventListener('pagehide', marco);

        if (tipo === 'telegram' && deeplink) {
            window.location.href = deeplink;
            setTimeout(function () {
                document.removeEventListener('visibilitychange', marco);
                window.removeEventListener('pagehide', marco);
                if (!salio && document.visibilityState === 'visible') avisar();
            }, 1400);
            return;
        }

        setTimeout(function () { if (!salio) avisar(); }, 260);
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

            // Botones del aviso. Se usa onclick para que cada pulsacion
            // reemplace cualquier manejador anterior.
            //
            // Equivalencias con el codigo pedido:
            //   btn-open-browser  -> inappTry
            //   btn-open-telegram -> inappTg
            //   btn-copy-link     -> inappCopy

            var btnTry = document.getElementById('inappTry');
            if (btnTry) {
                btnTry.onclick = function () {
                    if (!/Android/i.test(navigator.userAgent || '')) return;
                    var estado = document.getElementById('inappStatus');
                    abrirFueraDelWebView(aviso.url, function () {
                        if (!estado) return;
                        estado.hidden = false;
                        estado.textContent = 'No se pudo abrir el navegador. Usa los pasos de arriba o copia el enlace.';
                    });
                };
            }

            var btnTg = document.getElementById('inappTg');
            if (btnTg) {
                btnTg.onclick = function () {
                    window.location.href = aviso.deeplink || 'tg://resolve?domain=chmodxcode';
                };
            }

            var btnCopiar = document.getElementById('inappCopy');
            if (btnCopiar) {
                btnCopiar.onclick = function () {
                    var destino = aviso.url || (location.origin + location.pathname);
                    copiarAlPortapapeles(destino, btnCopiar);
                };
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
