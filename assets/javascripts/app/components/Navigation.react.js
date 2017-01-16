(function(React, App) {

    App.Components.Navigation = React.createClass({

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
                <div className="navigation">

                    <a className="menu-link" href="#" onClick={this.toggleMenu}>
                        <App.Components.MenuSvg menuToggleClass={this.state.menuToggleClass} />
                    </a>

                    <ul className={"navigation-list " + this.state.menuToggleClass}>
                        <App.Components.NavigationItem url="#portfolio" text="My Portfolio" />
                        <App.Components.NavigationItem url="#about" text="About Me" />
                        <App.Components.NavigationItem url="#links" text="Links" />
                    </ul>
                </div>
                );
        }
    });

})(React, App);


