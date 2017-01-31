(function (React, App) {

    App.Components.Footer = React.createClass({displayName: "Footer",
        render: function() {
            return(
                React.createElement("footer", {className: "footer"}, "Website © Rory Devane 2017")
                );
        }
    });

})(React, App);