/* ==========================================================================
   CHMODX · Formularios de captura de correo
   Cualquier <form data-cx-lead> se conecta solo. Requiere tracking.js.
   ========================================================================== */
(function () {
    'use strict';

    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setStatus(node, message, kind) {
        if (!node) {
            return;
        }
        node.textContent = message;
        node.className = 'lead-status is-' + kind;
    }

    function init(form) {
        var input = form.querySelector('input[type="email"]');
        var button = form.querySelector('button[type="submit"]');
        var status = form.querySelector('[data-cx-status]');
        var honeypot = form.querySelector('[data-cx-honeypot]');

        if (!input || !button) {
            return;
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            /* Campo trampa: si viene relleno, es un bot. */
            if (honeypot && honeypot.value) {
                return;
            }

            var email = (input.value || '').trim();

            if (!EMAIL_RE.test(email)) {
                setStatus(status, 'Introduce un correo válido.', 'error');
                input.focus();
                return;
            }

            if (!window.CX || typeof window.CX.trackLead !== 'function') {
                setStatus(status, 'La captura no está disponible ahora mismo.', 'error');
                return;
            }

            button.disabled = true;
            setStatus(status, 'Guardando…', 'pending');

            window.CX.trackLead(email, form.getAttribute('data-cx-source') || 'web').then(
                function (result) {
                    button.disabled = false;
                    if (result.ok) {
                        form.reset();
                        setStatus(status, 'Listo. Te avisaremos en el próximo envío.', 'ok');
                    } else {
                        setStatus(status, 'No se pudo guardar. Inténtalo de nuevo.', 'error');
                    }
                }
            );
        });
    }

    function boot() {
        document.querySelectorAll('form[data-cx-lead]').forEach(init);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
