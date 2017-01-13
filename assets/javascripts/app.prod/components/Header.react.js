(function (React, App) {

    App.Components.Header = React.createClass({displayName: "Header",

        render: function(){

            return (
                React.createElement("header", {className: "header"}, 
                    React.createElement("h1", {className: "page-title"}, "Rory Devane"), 
                    React.createElement("p", {className: "intro-para"}, "Full Stack Web Developer")
                )
            )
        }

    });

})(React, App);