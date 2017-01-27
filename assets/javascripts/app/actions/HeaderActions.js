(function (React, App, fetch, Request) {
    App.Actions.Header = {
        get: function () {

            var dataRequest = new Request('/api/test/header/');

            fetch(dataRequest).then(function (response) {

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