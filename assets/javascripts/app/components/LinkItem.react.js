(function(App, React) {

    App.Components.LinkItem = React.createClass({

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {

            var data = this.props.data,
                logo;

            console.log(data.type);

            switch(data.type) {
                case 'linked-in':
                    logo = <App.Components.LinkedInSvg/>;
                    break;
                case 'github':
                    logo = <App.Components.GitHubSvg/>;
                    break;
            }

            return(
                <li>
                    <a className="link" href={data.destination}>
                        {logo}
                        {data.text}
                    </a>
                </li>);
        }
    })

})(App, React);