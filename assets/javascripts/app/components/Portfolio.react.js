(function(App, React) {

    App.Components.Portfolio = React.createClass({

        render: function() {
            return(
                <div>
                    <App.Components.Search />
                    <App.Components.ProjectList data={this.props.projectData} />
                </div>
                )
        }
    });

})(App, React);