(function(App, React) {

    App.Components.LinkItem = React.createClass({displayName: "LinkItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {

            var data = this.props.data,
                logo;

            switch(data.type) {
                case 'linked-in':
                    logo = React.createElement(App.Svg.LinkedInSvg, null);
                    break;
                case 'github':
                    logo = React.createElement(App.Svg.GitHubSvg, null);
                    break;
            }

            return(
                React.createElement("li", null, 
                    React.createElement("a", {className: "link", href: data.destination}, 
                        logo, 
                        data.text
                    )
                ));
        }
    })

})(App, React);