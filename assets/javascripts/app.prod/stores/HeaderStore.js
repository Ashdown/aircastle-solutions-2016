(function(React, App, assign){

    var CHANGE_EVENT_STRING = 'header_change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _header = {
    };

    /**
     * Create the header object
     * @param {object} data the raw data
     */

    function create(data) {
        _header = {
            introduction: data.introduction
        };
    }

    App.Stores.HeaderStore = function(){};

    App.Stores.HeaderStore = assign({}, App.Stores.HeaderStore.prototype, {

        getContent: function() {
            return _header;
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
                case App.Constants.HeaderConstants.CREATE_HEADER:
                    data = action.data;
                    create(data);
                    App.Stores.HeaderStore.emitChange();
                    break;
            }

            return true;
        })

    });


})(React, App, objectAssign);