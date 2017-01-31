(function(React, App, assign){

    var CHANGE_EVENT_STRING = 'about_change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _about = {
        image: {}
    };

    /**
     * Create the about object
     * @param {object} data the raw data
     */

    function create(data) {
        _about = {
            description: data.description,
            image: {
                src: data.picture.url.replace('http://cms.rorydevane.com/wp-content/', '/assets/'),
                alt: data.picture.alt,
                height: data.picture.height,
                width: data.picture.width
            }
        };
    }

    App.Stores.AboutStore = function(){};

    App.Stores.AboutStore = assign({}, App.Stores.AboutStore.prototype, {

        getContent: function() {
            return _about;
        },

        addChangeListener: function(callback) {
            App.target.addEventListener(CHANGE_EVENT_STRING, callback);
        },

        removeChangeListener: function(callback) {
            App.target.removeEventListener(CHANGE_EVENT_STRING, callback);
        },

        emitChange: function() {
            App.target.dispatchEvent(CHANGE_EVENT)
        },

        dispatcherIndex: App.Dispatcher.register(function(payload) {
            var action = payload.action;
            var data;

            switch (action.actionType) {
                case App.Constants.AboutConstants.CREATE_ABOUT:
                    data = action.data;
                    create(data);
                    App.Stores.AboutStore.emitChange();
                    break;
            }

            return true;
        })

    });


})(React, App, objectAssign);