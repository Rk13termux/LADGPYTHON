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
            '.social-item, .ranking-chart'
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
    });
})();
