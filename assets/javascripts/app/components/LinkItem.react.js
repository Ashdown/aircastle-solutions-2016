(function(App, React) {

    App.Components.LinkItem = React.createClass({

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {

            var data = this.props.data,
                logo;

            switch(data.type) {
                case 'linked-in':
                    logo = <App.Svg.LinkedInSvg/>;
                    break;
                case 'github':
                    logo = <App.Svg.GitHubSvg/>;
                    break;
                default:
                    logo = <App.Svg.GlobeSvg/>
                    break;
            }

            return(
                <li>
                    <a className="link" target="_blank" href={data.destination}>
                        {logo}
                        {data.text}
                    </a>
                </li>);
        }
    })

})(App, React);