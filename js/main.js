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
       Los WebView de esas apps bloquean go.hotmart.com y t.me, e incluso
       rechazan los intentos de abrir otra aplicación (el sistema responde
       "la acción no se puede completar"). Por eso no se intenta salir:
       el curso se cobra con el checkout incrustado dentro de la propia
       página y, para lo que no se puede incrustar (Telegram), se explica
       cómo abrirlo en el navegador y se ofrece copiar el enlace.
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

    var aviso = { url: '' };
    var appInterna = null;
    var CANAL_TELEGRAM = 'chmodxcode';
    var URL_TELEGRAM = 'https://t.me/' + CANAL_TELEGRAM;
    var URL_CURSO = 'https://go.hotmart.com/S99672631V?ap=7ba0';

    // Permite probar el pago incrustado desde un navegador normal:
    // chmodxcode.pro/?pago=1
    var pagoForzado = /[?&]pago=1\b/.test(location.search);

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

    /* ----------------------------------------------------------------
       Pago sin salir de la página (checkout incrustado de Hotmart).
       El navegador interno de TikTok bloquea go.hotmart.com igual que
       bloquea t.me: cualquier salto acaba en un aviso del sistema. Así
       que, en vez de intentar salir, se trae el checkout oficial de
       Hotmart dentro de un iframe. Al no haber navegación externa no hay
       nada que la app pueda bloquear y el pago se completa en la misma
       pantalla. La oferta y la referencia salen del propio enlace de
       venta (go.hotmart.com/S99672631V -> pay.hotmart.com/R63702137B).
       ---------------------------------------------------------------- */
    var OFERTA_HOTMART = '6xhye5kp';
    var REF_HOTMART = 'S99672631V';
    var LIB_CHECKOUT = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    var ESPERA_CHECKOUT = 15000;     // margen amplio: en móvil y con el CDN
                                     // en frío la librería puede tardar

    var capaCheckout = null;         // instancia de overlayCheckout
    var anclaCheckout = null;        // botón oculto al que se engancha
    var relojCheckout = null;        // temporizador de la carga en curso
    var cargandoCheckout = false;
    var pendientesCheckout = [];     // quien espera el resultado

    function montarCheckout() {
        anclaCheckout = document.createElement('button');
        anclaCheckout.type = 'button';
        anclaCheckout.id = 'hotmartCheckoutAnchor';
        anclaCheckout.setAttribute('aria-hidden', 'true');
        anclaCheckout.tabIndex = -1;
        anclaCheckout.style.cssText =
            'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none';
        document.body.appendChild(anclaCheckout);

        capaCheckout = window.checkoutElements.init('overlayCheckout', {
            offer: OFERTA_HOTMART,
            locale: 'es',
            // Hotmart toma estas claves como parámetros del iframe; con
            // 'ref' la venta queda registrada en el mismo enlace que el botón
            prefilledInfo: { ref: REF_HOTMART }
        });
        capaCheckout.mount(anclaCheckout);
    }

    /* La librería se carga solo cuando alguien pulse un botón de compra
       desde un navegador interno: nunca al abrir la página, para no
       castigar la velocidad de todos los visitantes. */
    function cargarCheckout(alTerminar) {
        if (capaCheckout) { alTerminar(true); return; }

        pendientesCheckout.push(alTerminar);
        if (cargandoCheckout) return;
        cargandoCheckout = true;

        var terminado = false;
        var terminar = function (ok) {
            if (terminado) return;
            terminado = true;
            cargandoCheckout = false;
            clearTimeout(relojCheckout);
            relojCheckout = null;
            var lista = pendientesCheckout.slice();
            pendientesCheckout.length = 0;
            for (var i = 0; i < lista.length; i++) lista[i](ok);
        };

        relojCheckout = setTimeout(function () { terminar(false); }, ESPERA_CHECKOUT);

        var s = document.createElement('script');
        s.src = LIB_CHECKOUT;
        s.async = true;
        s.onload = function () {
            try {
                if (!window.checkoutElements) { terminar(false); return; }
                montarCheckout();
                terminar(true);
            } catch (e) {
                terminar(false);
            }
        };
        s.onerror = function () { terminar(false); };
        document.head.appendChild(s);
    }

    /* Indicador de espera del pago incrustado. Vuelve siempre al estado de
       espera; si la libreria no llega, mostrarFalloPago lo convierte en un
       aviso con el enlace para copiar. */
    function mostrarCargandoPago(mostrar) {
        var caja = document.getElementById('pagoCargando');
        if (!caja) return;
        caja.hidden = !mostrar;
        if (!mostrar) return;
        var spinner = document.getElementById('pagoSpinner');
        if (spinner) spinner.hidden = false;
        var txt = document.getElementById('pagoCargandoTxt');
        if (txt) txt.textContent = 'Abriendo el pago seguro…';
        var fallo = document.getElementById('pagoFallo');
        if (fallo) fallo.hidden = true;
    }

    /* Respaldo del pago: el widget no cargo, asi que el mismo indicador
       pasa a explicar que hay que copiar el enlace. */
    function mostrarFalloPago() {
        var caja = document.getElementById('pagoCargando');
        if (!caja) return;
        caja.hidden = false;
        var spinner = document.getElementById('pagoSpinner');
        if (spinner) spinner.hidden = true;
        var txt = document.getElementById('pagoCargandoTxt');
        if (txt) txt.textContent = 'No se pudo cargar el pago aquí dentro. Copia el enlace y ábrelo en tu navegador.';
        var fallo = document.getElementById('pagoFallo');
        if (fallo) fallo.hidden = false;
    }

    function abrirCheckout(alFallar) {
        mostrarCargandoPago(true);
        cargarCheckout(function (ok) {
            mostrarCargandoPago(false);
            if (ok) {
                try {
                    cerrarAviso();
                    anclaCheckout.click();    // la capa escucha el clic
                    return;
                } catch (e) { /* se cae al respaldo */ }
            }
            if (alFallar) alFallar();
        });
    }

    function enlaceMasCercano(nodo) {
        while (nodo && nodo !== document) {
            if (nodo.tagName === 'A' && nodo.getAttribute('href')) return nodo;
            nodo = nodo.parentNode;
        }
        return null;
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
                boton.innerHTML = '<i class="fas fa-hand-pointer" aria-hidden="true"></i> Mantén pulsado el enlace de abajo';
                // Se deja el enlace seleccionado y resaltado: en un WebView
                // donde falla el copiado, basta con mantenerlo pulsado.
                var el = document.getElementById('inappUrl');
                if (el && window.getSelection && document.createRange) {
                    try {
                        var sel = window.getSelection();
                        var rango = document.createRange();
                        rango.selectNodeContents(el);
                        sel.removeAllRanges();
                        sel.addRange(rango);
                        el.classList.add('destacar');
                        // si la tarjeta se desplaza, que el enlace quede a la vista
                        if (el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
                    } catch (e) {}
                }
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

    /* El aviso es solo para el canal de Telegram: el curso se paga dentro
       de la propia pagina con el widget de Hotmart y no necesita ninguno.
       Como ningun WebView garantiza abrir otra aplicacion (TikTok rechaza
       los esquemas de app con un error del sistema), se ofrecen los dos
       caminos: intentar abrirlo y, si no sale, copiar el enlace. */
    function pasosDelAviso() {
        return [
            'Pulsa <strong>Entrar al canal de Telegram</strong>.',
            'Si no se abre, pulsa <strong>Copiar enlace</strong>.',
            'Abre <strong>Telegram</strong> y pega el enlace, o busca <strong>@' + CANAL_TELEGRAM + '</strong>.'
        ];
    }

    function estadoDelAviso(texto) {
        var estado = document.getElementById('inappStatus');
        if (!estado) return;
        estado.hidden = !texto;
        estado.textContent = texto || '';
    }

    function mostrarAviso(url) {
        var modal = document.getElementById('inappModal');
        if (!modal) return;

        var destino = url || aviso.url || URL_TELEGRAM;
        aviso.url = destino;

        var nombreApp = appInterna ? appInterna.nombre : 'una aplicación';

        var elDesc = document.getElementById('inappDesc');
        if (elDesc) {
            elDesc.innerHTML = 'Estás dentro de <strong id="inappApp"></strong> y su navegador '
                + 'no permite abrir Telegram. Prueba con el botón azul y, si no se abre, '
                + 'copia el enlace y pégalo en tu navegador.';
            // el nombre se escribe con textContent para no inyectar nada
            var elApp = document.getElementById('inappApp');
            if (elApp) elApp.textContent = nombreApp;
        }

        var elUrl = document.getElementById('inappUrl');
        if (elUrl) {
            elUrl.textContent = destino;
            elUrl.classList.remove('destacar');
        }

        var pasos = document.getElementById('inappSteps');
        if (pasos) {
            var lista = pasosDelAviso();
            pasos.innerHTML = '';
            for (var i = 0; i < lista.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = lista[i];
                pasos.appendChild(li);
            }
        }

        estadoDelAviso('');

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        var cerrar = document.getElementById('inappClose');
        if (cerrar) setTimeout(function () { cerrar.focus(); }, 260);
    }

    /* Intenta abrir el canal. Se usa window.open y no un esquema de app
       (tg://) porque el WebView bloqueado devuelve null en lugar de sacar
       el error del sistema; en ese caso se copia el enlace y se avisa, de
       modo que el usuario nunca se queda sin salida. */
    function abrirTelegram(url) {
        var destino = url || aviso.url || URL_TELEGRAM;
        var ventana = null;
        try { ventana = window.open(destino, '_blank'); } catch (e) { ventana = null; }
        if (ventana) return;

        estadoDelAviso('La aplicación no dejó abrir Telegram. Copiamos el enlace: pégalo en tu navegador.');
        var btnCopiar = document.getElementById('inappCopy');
        copiarAlPortapapeles(destino, btnCopiar);
    }

    function cerrarAviso() {
        var modal = document.getElementById('inappModal');
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
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

            var btnTg = document.getElementById('inappTg');
            if (btnTg) {
                btnTg.onclick = function () { abrirTelegram(aviso.url); };
            }

            var btnCopiar = document.getElementById('inappCopy');
            if (btnCopiar) {
                btnCopiar.onclick = function () {
                    copiarAlPortapapeles(aviso.url || URL_TELEGRAM, btnCopiar);
                };
            }

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && modal.classList.contains('open')) cerrarAviso();
            });
        }

        // Respaldo del pago: si el widget no carga, se ofrece el enlace.
        var pagoCopiar = document.getElementById('pagoCopiar');
        if (pagoCopiar) {
            pagoCopiar.onclick = function () { copiarAlPortapapeles(URL_CURSO, pagoCopiar); };
        }
        var pagoCerrar = document.getElementById('pagoCerrar');
        if (pagoCerrar) {
            pagoCerrar.onclick = function () { mostrarCargandoPago(false); };
        }

        // Sin aviso automatico: la pagina se ve entera desde el primer
        // segundo para que el visitante la lea y se anime a comprar. La
        // ventana aparece solo si de verdad se pide Telegram.

        document.addEventListener('click', function (e) {
            if (e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

            // los enlaces de dentro del aviso van por su cuenta
            if (modal && modal.contains(e.target)) return;

            var a = enlaceMasCercano(e.target);
            if (!a) return;

            var url = a.getAttribute('href') || '';
            if (!/^https?:\/\//i.test(url)) return;

            var tipo = tipoDeEnlace(url);
            if (!tipo) return;                            // solo los enlaces bloqueados

            // En un navegador normal el enlace funciona solo, así que no se
            // toca nada. Con ?pago=1 se puede probar el pago incrustado.
            if (!appInterna && !(pagoForzado && tipo === 'hotmart')) return;

            e.preventDefault();

            // El curso se cobra dentro de la propia página con el widget de
            // Hotmart: no hay salto que el navegador pueda bloquear.
            if (tipo === 'hotmart') {
                abrirCheckout(mostrarFalloPago);
                return;
            }

            // Telegram no se puede incrustar, así que se abre el aviso con
            // el intento de apertura y el enlace para copiar.
            mostrarAviso(url);
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
