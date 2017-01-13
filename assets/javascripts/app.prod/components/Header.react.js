(function (React, App) {

    App.Components.Header = React.createClass({displayName: "Header",

        render: function () {

            return (
                React.createElement("header", {className: "header"}, 
                    React.createElement("h1", {className: "page-title"}, "Rory Devane"), 
                    React.createElement("p", {className: "description-para"}, "Full Stack Web Developer"), 
                    React.createElement("p", {className: "intro-para"}, 
                    "Hi, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" + ' ' +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" + ' ' +
                    "nisi ut aliquip ex ea commodo consequat."
                    ), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#portfolio"}, "My Portfolio")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#about"}, "About Me")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#links"}, "Links")
                        )
                    )

                )
                )
        }

    });

})(React, App);