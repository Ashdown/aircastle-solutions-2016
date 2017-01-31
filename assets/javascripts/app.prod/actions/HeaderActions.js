(function (React, App, fetch, Request) {
    App.Actions.Header = {
        get: function () {

            fetchJsonp('/api/test/header/').then(function(response){
            //fetchJsonp('http://cms.rorydevane.com/header/').then(function(response){
                return response.json();
            }).then(function (data) {

                App.Dispatcher.handleViewAction({
                    actionType: App.Constants.HeaderConstants.CREATE_HEADER,
                    data: data
                });

            });

        }
    }
})(React, App, fetch, Request);