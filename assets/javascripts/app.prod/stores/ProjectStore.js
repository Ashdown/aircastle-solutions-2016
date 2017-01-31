(function (React, App, assign) {

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

        var images = [];

        for (var i in data.pictures) {
            images.push({
                height: data.pictures[i].height,
                width: data.pictures[i].width,
                alt: data.pictures[i].alt,
                url: data.pictures[i].url.replace('http://cms.rorydevane.com/wp-content/', '/assets/')
            });
        }

        _projects.push({
            id: id,
            title: data.title,
            type: data.type,
            description: data.description,
            images: images,
            links: data.links,
            keywords: data.keywords,
            start: new Date(data.startDate),
            end: new Date(data.endDate),
            matchesFilter: true

        });
        //sort by date
        _projects.sort(function (a, b) {
            return b.start.getTime() - a.start.getTime();
        })
    }

    App.Stores.ProjectStore = function () {
    };

    App.Stores.ProjectStore = assign({}, App.Stores.ProjectStore.prototype, {

        getAll: function () {
            return _projects;
        },

        filterByKeyword: function (keyword) {
            console.log('filter');
            for (var i in _projects) {
                _projects[i].matchesFilter = false;

                for (var j in _projects[i].keywords) {

                    if (_projects[i].keywords[j].indexOf(keyword) !== -1) {
                        _projects[i].matchesFilter = true;
                        break;
                    }
                }
            }
        },


        addChangeListener: function (callback) {
            App.target.addEventListener(CHANGE_EVENT_STRING, callback);
        },

        removeChangeListener: function (callback) {
            App.target.removeEventListener(CHANGE_EVENT_STRING, callback);
        },

        emitChange: function () {
            App.target.dispatchEvent(CHANGE_EVENT)
        },

        dispatcherIndex: App.Dispatcher.register(function (payload) {
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