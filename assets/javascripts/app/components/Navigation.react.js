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
                        <App.Svg.MenuSvg menuToggleClass={this.state.menuToggleClass} />
                    </a>

                    <ul className={"navigation-list " + this.state.menuToggleClass}>
                        <App.Components.NavigationItem type="portfolio-link" url="#portfolio" text="My Portfolio" />
                        <App.Components.NavigationItem type="about-link" url="#about" text="About" />
                        <App.Components.NavigationItem type="links-link" url="#links" text="Links" />
                    </ul>
                </div>
                );
        }
    });

})(React, App);


