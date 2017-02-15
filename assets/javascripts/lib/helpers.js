(function(window) {
    var helpers = {
        getPageScrollTop: function() {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        },

        getPageScrollBottom: function() {
            return this.getPageScrollTop() + window.innerHeight;
        },

        orderObjectByKey: function(unordered) {

            var ordered = {};

            Object.keys(unordered).sort().forEach(function(key) {
                ordered[key] = unordered[key];
            });

            return ordered;
        },

        getEndpoint: function() {
            //production
            return 'http://cms.rorydevane.com/';
            //test and local
            //return '/api/test/';
        }

    };

    window.helpers = helpers;
})(window);