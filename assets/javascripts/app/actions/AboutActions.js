(function(React, App, fetch, Request, helpers){
    App.Actions.About = {
        get: function() {

            fetchJsonp(helpers.getEndpoint() + 'about/').then(function(response){

                return response.json();
            }).then(function(data) {

                App.Dispatcher.handleViewAction({
                    actionType: App.Constants.AboutConstants.CREATE_ABOUT,
                    data: data
                });

            });

        }
    }
})(React, App, fetch, Request, helpers);