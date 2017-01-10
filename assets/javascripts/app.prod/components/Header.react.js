(function (React, App) {

    App.Components.Header = React.createClass({displayName: "Header",

        render: function(){

            return (
                React.createElement("header", {id: "header"}, "Header")
            )
        }

    });

})(React, App);