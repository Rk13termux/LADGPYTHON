/* ==========================================================================
   CHMODX · Interacciones del hub de contenido
   Copiar código, filtrar catálogos, índice lateral y progreso de lectura.
   ========================================================================== */
(function () {
    'use strict';

    /* ----------------------------------------------------------------
       Copiar al portapapeles con respaldo para WebViews antiguos
       ---------------------------------------------------------------- */
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
        } catch (error) {
            return false;
        }
    }

    function copiar(texto, boton) {
        var original = boton ? boton.innerHTML : '';
        var avisado = false;

        function confirmar(ok) {
            if (!boton || avisado) return;
            avisado = true;
            boton.classList.add(ok ? 'is-copied' : 'is-error');
            boton.innerHTML = ok
                ? '<i class="fas fa-check" aria-hidden="true"></i> Copiado'
                : '<i class="fas fa-triangle-exclamation" aria-hidden="true"></i> Selecciona y copia';
            window.setTimeout(function () {
                boton.innerHTML = original;
                boton.classList.remove('is-copied', 'is-error');
            }, 2200);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto).then(
                function () { confirmar(true); },
                function () { confirmar(copiarLegado(texto)); }
            );
            return;
        }
        confirmar(copiarLegado(texto));
    }

    function initCopiarCodigo() {
        document.querySelectorAll('[data-copy-code]').forEach(function (boton) {
            boton.addEventListener('click', function () {
                var bloque = boton.closest('.code-block');
                var codigo = bloque ? bloque.querySelector('pre code') : null;
                if (!codigo) return;
                copiar(codigo.textContent, boton);
            });
        });

        document.querySelectorAll('[data-copy]').forEach(function (boton) {
            boton.addEventListener('click', function () {
                var valor = boton.getAttribute('data-copy');
                var nodo = valor && valor.charAt(0) === '#' ? document.querySelector(valor) : null;
                copiar(nodo ? nodo.textContent : (valor || ''), boton);
            });
        });
    }

    /* ----------------------------------------------------------------
       Filtros del catálogo (búsqueda + categoría)
       ---------------------------------------------------------------- */
    function normalizar(texto) {
        return (texto || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function initFiltros() {
        var lista = document.getElementById('contentList');
        if (!lista) return;

        var tarjetas = Array.prototype.slice.call(lista.querySelectorAll('.content-card'));
        var campo = document.getElementById('contentSearch');
        var contador = document.getElementById('contentCount');
        var vacio = document.getElementById('contentEmpty');
        var chips = Array.prototype.slice.call(document.querySelectorAll('[data-filter-category]'));
        var categoriaActiva = 'all';
        var temporizador = null;

        var params = new URLSearchParams(window.location.search);
        var consultaInicial = params.get('q') || '';
        var categoriaInicial = params.get('categoria') || 'all';

        if (campo) campo.value = consultaInicial;
        if (chips.some(function (chip) { return chip.getAttribute('data-filter-category') === categoriaInicial; })) {
            categoriaActiva = categoriaInicial;
        }

        function pintarChips() {
            chips.forEach(function (chip) {
                var activo = chip.getAttribute('data-filter-category') === categoriaActiva;
                chip.classList.toggle('is-active', activo);
                chip.setAttribute('aria-pressed', activo ? 'true' : 'false');
            });
        }

        function actualizarUrl() {
            var nuevo = new URLSearchParams();
            var texto = campo ? campo.value.trim() : '';
            if (texto) nuevo.set('q', texto);
            if (categoriaActiva !== 'all') nuevo.set('categoria', categoriaActiva);
            var query = nuevo.toString();
            var url = window.location.pathname + (query ? '?' + query : '');
            try {
                window.history.replaceState(null, '', url);
            } catch (error) {
                /* algunos WebViews no permiten replaceState */
            }
        }

        function aplicar() {
            var consulta = normalizar(campo ? campo.value.trim() : '');
            var visibles = 0;

            tarjetas.forEach(function (tarjeta) {
                var categoria = tarjeta.getAttribute('data-category') || '';
                var contenido = normalizar(tarjeta.getAttribute('data-search') || '');
                var coincideCategoria = categoriaActiva === 'all' || categoria === categoriaActiva;
                var coincideTexto = !consulta || contenido.indexOf(consulta) !== -1;
                var mostrar = coincideCategoria && coincideTexto;
                tarjeta.hidden = !mostrar;
                if (mostrar) visibles += 1;
            });

            if (contador) {
                contador.textContent = visibles === 1 ? '1 resultado' : visibles + ' resultados';
            }
            if (vacio) vacio.hidden = visibles !== 0;
            lista.hidden = visibles === 0;
            pintarChips();
            actualizarUrl();
        }

        chips.forEach(function (chip) {
            chip.addEventListener('click', function (evento) {
                evento.preventDefault();
                categoriaActiva = chip.getAttribute('data-filter-category') || 'all';
                aplicar();
            });
        });

        if (campo) {
            campo.addEventListener('input', function () {
                window.clearTimeout(temporizador);
                temporizador = window.setTimeout(aplicar, 120);
            });
        }

        aplicar();
    }

    /* ----------------------------------------------------------------
       Índice lateral con sección activa
       ---------------------------------------------------------------- */
    function initIndice() {
        var enlaces = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
        if (!enlaces.length || !('IntersectionObserver' in window)) return;

        var mapa = {};
        var titulos = [];
        enlaces.forEach(function (enlace) {
            var id = enlace.getAttribute('href').slice(1);
            var titulo = document.getElementById(id);
            if (titulo) {
                mapa[id] = enlace;
                titulos.push(titulo);
            }
        });

        var observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (!entrada.isIntersecting) return;
                enlaces.forEach(function (enlace) { enlace.classList.remove('is-active'); });
                var activo = mapa[entrada.target.id];
                if (activo) activo.classList.add('is-active');
            });
        }, { rootMargin: '-18% 0px -70% 0px', threshold: 0 });

        titulos.forEach(function (titulo) { observador.observe(titulo); });
    }

    /* ----------------------------------------------------------------
       Progreso de lectura
       ---------------------------------------------------------------- */
    function initProgreso() {
        var barra = document.getElementById('readingProgress');
        var articulo = document.querySelector('.article-main');
        if (!barra || !articulo) return;

        var pendiente = false;

        function calcular() {
            pendiente = false;
            var inicio = articulo.offsetTop;
            var total = articulo.offsetHeight - window.innerHeight;
            var avance = total > 0 ? (window.scrollY - inicio) / total : 0;
            avance = Math.max(0, Math.min(1, avance));
            barra.style.width = (avance * 100).toFixed(2) + '%';
        }

        window.addEventListener('scroll', function () {
            if (pendiente) return;
            pendiente = true;
            window.requestAnimationFrame(calcular);
        }, { passive: true });

        window.addEventListener('resize', calcular);
        calcular();
    }

    /* ----------------------------------------------------------------
       Aparición suave al hacer scroll (sin afectar al HTML sin JS)
       ---------------------------------------------------------------- */
    function initReveal() {
        if (!('IntersectionObserver' in window)) return;
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var nodos = document.querySelectorAll(
            '.content-card, .cat-card, .path-step, .section-head, .academy-band-inner, .cta-band-inner'
        );
        if (!nodos.length) return;

        var observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (!entrada.isIntersecting) return;
                entrada.target.classList.add('is-visible');
                observador.unobserve(entrada.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

        nodos.forEach(function (nodo) {
            nodo.classList.add('reveal-on-scroll');
            observador.observe(nodo);
        });
    }

    /* ----------------------------------------------------------------
       Estado accesible del menú móvil
       ---------------------------------------------------------------- */
    function initMenuAccesible() {
        var boton = document.getElementById('navToggle');
        var menu = document.getElementById('mobileMenu');
        if (!boton || !menu) return;

        boton.addEventListener('click', function () {
            var abierto = menu.classList.contains('open');
            boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
            boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initCopiarCodigo();
        initFiltros();
        initIndice();
        initProgreso();
        initReveal();
        initMenuAccesible();
    });
})();
