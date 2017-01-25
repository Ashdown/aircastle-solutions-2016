(function(React, App, fetch, Request){
    App.Actions.Project = {
        get: function() {

            fetchJsonp('/api/test/projects/')
            //fetchJsonp('http://cms.rorydevane.com/projects/')
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    for(var i = 0; i < data.projects.length; i++) {
                        App.Dispatcher.handleViewAction({
                            actionType: App.Constants.ProjectConstants.CREATE_PROJECT,
                            data: data.projects[i]
                        });
                    }
                }).catch(function(ex) {
                    //console.log('parsing failed', ex);
                });

        }
    }
})(React, App, fetch, Request);