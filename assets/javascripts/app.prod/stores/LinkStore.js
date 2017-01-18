(function(React, App, assign){

    var CHANGE_EVENT_STRING = 'link_change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _links = [];

    /**
     * Create a link
     * @param {object} data the raw data for this link
     */

    function create(data) {
        //use timestamp as the id
        var id = Date.now();
        _links.push({
            id: id,
            text: data.text,
            destination: data.destination,
            type: data.type
        });
    }

    App.Stores.LinkStore = function(){};

    App.Stores.LinkStore = assign({}, App.Stores.LinkStore.prototype, {

        getAll: function() {
            return _links;
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

                case App.Constants.LinkConstants.CREATE_LINK:
                    data = action.data;
                    create(data);
                    App.Stores.LinkStore.emitChange();
                    break;
            }

            return true;
        })

    });


})(React, App, objectAssign);