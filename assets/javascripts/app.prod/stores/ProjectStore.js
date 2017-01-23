(function(React, App, assign){

    var CHANGE_EVENT_STRING = 'project_change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _projects = [];

    /**
     * Create a project
     * @param {object} data the raw data for this project
     */

    function create(data) {
        //use timestamp as the id
        var id = Date.now();
        _projects.push({
            id: id,
            title: data.title,
            type: data.type,
            description: data.description,
            images: data.pictures,
            links: data.links,
            keywords: data.keywords,
            start: data.startDate,
            end: data.endDate
        });
    }

    App.Stores.ProjectStore = function(){};

    App.Stores.ProjectStore = assign({}, App.Stores.ProjectStore.prototype, {

        getAll: function() {
            return _projects;
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

                case App.Constants.ProjectConstants.CREATE_PROJECT:
                    data = action.data;
                    create(data);
                    App.Stores.ProjectStore.emitChange();
                    break;
            }

            return true;
        })

    });


})(React, App, objectAssign);