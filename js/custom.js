 /* START -- Adding Author and Date for Discovery Collections -- START */

app.component('prmGalleryItemAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: function () {
        var $ctrl = this;
        $ctrl.$onInit = function () {
            try {
                $ctrl.author = $ctrl.parentCtrl.item.pnx.addata.au[0];
            } catch (e) {
                $ctrl.author = '';
            }
            try {
                $ctrl.date = $ctrl.parentCtrl.item.pnx.display.creationdate[0];
            } catch (e) {
                $ctrl.date = '';
            }
            $ctrl.hasDate = !!$ctrl.date;
            $ctrl.hasAuthor = !!$ctrl.author;
        };
    },
    template: '<div ng-if="$ctrl.hasDate">{{$ctrl.date}}</div> <div ng-if="$ctrl.hasAuthor">{{$ctrl.author}}</div>'
});

/* END -- Adding Author and Date for Discovery Collections -- END */

/* START -- Google Tag Manager -- START */

var GTM_CODE = 'Google Tag Manager Code';

(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', GTM_CODE);

/* START -- Google Tag Manager -- START */