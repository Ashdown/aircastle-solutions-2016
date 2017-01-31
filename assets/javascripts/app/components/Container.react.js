(function (React, App) {

    App.Components.Container = React.createClass({


        /**
         * @return {object}
         */
        render: function () {
            return (
                <div>
                    <App.Components.Header />
                    <App.Components.MainSection />
                    <App.Components.Footer />
                    <App.Components.PopUp />
                    <div className="background-shape"></div>
                </div>
                );
        }

    });

})(React, App);