(function(React, App) {

    App.Components.Navigation = React.createClass({displayName: "Navigation",

        getInitialState: function() {
            return({
                menuToggleClass: 'closed'
            });
        },

        toggleMenu: function(event) {
            event.preventDefault();
            this.setState({
                menuToggleClass: (this.state.menuToggleClass === 'closed') ? 'open' : 'closed'
            });
        },

        render: function() {

            return (
                React.createElement("div", {className: "navigation"}, 

                    React.createElement("a", {className: "menu-link", href: "#", onClick: this.toggleMenu}, 
                        React.createElement(App.Svg.MenuSvg, {menuToggleClass: this.state.menuToggleClass})
                    ), 

                    React.createElement("ul", {className: "navigation-list " + this.state.menuToggleClass}, 
                        React.createElement(App.Components.NavigationItem, {url: "#portfolio", text: "My Portfolio"}), 
                        React.createElement(App.Components.NavigationItem, {url: "#about", text: "About Me"}), 
                        React.createElement(App.Components.NavigationItem, {url: "#links", text: "Links"})
                    )
                )
                );
        }
    });

})(React, App);


