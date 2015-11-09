(function(window, angular, undefined) {'use strict';

    /**
     * @ngdoc overview
     * @name angulartics.google.adwords.remarketing.tag
     * Enables remarketing support for Google Adwords Remaketing Tag ()
     */
    angular.module('angulartics.google.adwords.remarketing.tag', ['angulartics'])
        .config(['$analyticsProvider', function ($analyticsProvider) {

            angulartics.waitForVendorApi('google_trackConversion', 500, function (trackConversion) {
                console.log('conversion id: ', window._gart_conversion_id);
                $analyticsProvider.registerPageTrack(function (path) {
                    console.log('send trackConversion');
                    trackConversion({
                        google_conversion_id: window._gart_conversion_id,
                        google_remarketing_only: true
                    });
                });
            });

        }]);
})(window, window.angular);