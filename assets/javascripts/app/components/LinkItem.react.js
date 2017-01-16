(function(App, React) {

    App.Components.LinkItem = React.createClass({

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {

            var data = this.props.data;
            return(
                <li>
                    <a href={data.destination}>{data.text}</a>
                </li>);
        }
    })

})(App, React);