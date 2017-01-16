(function(React, App, fetch, Request){
    App.Actions.Link = {
        get: function() {

            var linkDataRequest = new Request('/api/test/links/');

            //var projectDataRequest = new Request('http://shielded-scrubland-59117.herokuapp.com/projects/');

            fetch(linkDataRequest).then(function(response) {

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
})(React, App, fetch, Request);