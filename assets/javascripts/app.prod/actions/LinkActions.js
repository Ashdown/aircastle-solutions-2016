(function(React, App, fetch, Request, helpers){
    App.Actions.Link = {
        get: function() {

            fetchJsonp(helpers.getEndpoint() + 'links/')
            .then(function(response) {

                return response.json();
            }).then(function(data) {

                for(var i = 0; i < data.links.length; i++) {
                    App.Dispatcher.handleViewAction({
                        actionType: App.Constants.LinkConstants.CREATE_LINK,
                        data: data.links[i]
                    });
                }

            });

        }
    }
})(React, App, fetch, Request, helpers);