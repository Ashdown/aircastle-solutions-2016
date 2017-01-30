(function(App, React) {
    App.Components.ResultsCount = React.createClass({
        render: function() {

            var projectCount = 0;

            for(var i in this.props.data) {
                if(this.props.data[i].matchesFilter) {
                    projectCount++;
                }
            }

            return(<p className="results-count">{projectCount} projects</p>)
        }
    })
})(App, React);