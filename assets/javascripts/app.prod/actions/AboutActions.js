(function(React, App, fetch, Request){
    App.Actions.About = {
        get: function() {

            //fetchJsonp('/api/test/about/').then(function(response){
            fetchJsonp('http://cms.rorydevane.com/about/').then(function(response){

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