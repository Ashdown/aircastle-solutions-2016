(function(React, App, fetch, Request){
    App.Actions.Project = {
        get: function() {

            var projectDataRequest = new Request('/api/test/projects/');

            //var projectDataRequest = new Request('http://shielded-scrubland-59117.herokuapp.com/projects/');

            fetch(projectDataRequest).then(function(response) {

                return response.json();
            }).then(function(data) {

                for(var i = 0; i < data.projects.length; i++) {
                    App.Dispatcher.handleViewAction({
                        actionType: App.Constants.ProjectConstants.CREATE_PROJECT,
                        data: data.projects[i]
                    });
                }

            });


        }
    }
})(React, App, fetch, Request);