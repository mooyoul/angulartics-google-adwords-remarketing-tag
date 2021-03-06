(function(window, angular, undefined) {'use strict';

    /**
     * @ngdoc overview
     * @name angulartics.google.adwords.remarketing.tag
     * Enables remarketing support for Google Adwords Remaketing Tag (https://adwords.google.com/)
     */
    angular.module('angulartics.google.adwords.remarketing.tag', ['angulartics'])
        .config(['$analyticsProvider', function ($analyticsProvider) {
            angulartics.waitForVendorApi('google_trackConversion', 500, function (trackConversion) {
                $analyticsProvider.registerPageTrack(function (path) {
                    trackConversion({
                        google_conversion_id: window._gart_conversion_id,
                        google_remarketing_only: true
                    });
                });
            });
        }]);
})(window, window.angular);