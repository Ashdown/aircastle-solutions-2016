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
                        React.createElement(App.Components.NavigationItem, {type: "portfolio-link", url: "#portfolio", text: "My Portfolio"}), 
                        React.createElement(App.Components.NavigationItem, {type: "about-link", url: "#about", text: "About"}), 
                        React.createElement(App.Components.NavigationItem, {type: "links-link", url: "#links", text: "Links"})
                    )
                )
                );
        }
    });

})(React, App);


