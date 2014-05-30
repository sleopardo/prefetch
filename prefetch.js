/*
 * prefetch
 * Función: load componentes, views or statics
 * params: array || string
 * How to use:
    prefetch([
        'http://www.mercadolibre.com.ar',
        'http://www.google.com'
    ]);

   prefetch('/views/contact.html');
*/

(function (exports) {

    "use strict";

    /**
     * Namespace
     */
    function prefetch(el) {
        _init(el);
    }


    /**
     * Private members
     */
    var win = window,
        doc = win.document;


    /**
     * _createIframe
     */
    function _createIframe(el) {
        var iframe = doc.createElement('iframe'),
            whereAppend = doc.getElementsByTagName('script')[0];

        // Set source
        iframe.src = el;

        // Iframe will be invisible
        (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0; position: absolute";

        // Append iframe
        whereAppend.parentNode.insertBefore(iframe, whereAppend);
    }

    /**
     * _init
     */
    function _init(el) {
        var i;

        // if receive an string, this create just one iframe
        if (typeof el === "string") {
            _createIframe(el);
        // if receive an array, this create multiples iframes
        } else {
            i = el.length; // Cantidad de recursos a cargar
            while (i--) {
                _createIframe(el[i]);
            }
        }
    }

    /**
     * Export component
     */
    exports.prefetch = prefetch;

}(this));
