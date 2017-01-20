(function(window) {
    var helpers = {
        getPageScrollTop: function() {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        },

        getPageScrollBottom: function() {
            return this.getPageScrollTop() + window.innerHeight;
        }

    }

    window.helpers = helpers;
})(window);