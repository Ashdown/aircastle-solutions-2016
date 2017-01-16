(function (React, App) {

    App.Components.Footer = React.createClass({displayName: "Footer",
        render: function() {
            return(
                React.createElement("footer", {className: "footer"}, "© Rory Devane 2017")
                );
        }
    });

})(React, App);