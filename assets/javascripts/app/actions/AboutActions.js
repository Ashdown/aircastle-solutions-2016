(function(React, App, fetch, Request){
    App.Actions.About = {
        get: function() {

            var aboutDataRequest = new Request('/api/test/about/');

            //var projectDataRequest = new Request('http://shielded-scrubland-59117.herokuapp.com/projects/');

            fetch(aboutDataRequest).then(function(response) {

                return response.json();
            }).then(function(data) {

                App.Dispatcher.handleViewAction({
                    actionType: App.Constants.AboutConstants.CREATE_ABOUT,
                    data: data
                });

            });

        }
    }
})(React, App, fetch, Request);