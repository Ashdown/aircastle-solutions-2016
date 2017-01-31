(function (React, App) {

    App.Components.Container = React.createClass({displayName: "Container",


        /**
         * @return {object}
         */
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(App.Components.Header, null), 
                    React.createElement(App.Components.MainSection, null), 
                    React.createElement(App.Components.Footer, null), 
                    React.createElement(App.Components.PopUp, null), 
                    React.createElement("div", {className: "background-shape"})
                )
                );
        }

    });

})(React, App);