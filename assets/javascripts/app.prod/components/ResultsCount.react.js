(function(App, React) {
    App.Components.ResultsCount = React.createClass({displayName: "ResultsCount",
        render: function() {

            var projectCount = 0;

            for(var i in this.props.data) {
                if(this.props.data[i].matchesFilter) {
                    projectCount++;
                }
            }

            return(React.createElement("p", {className: "results-count"}, projectCount, " projects"))
        }
    })
})(App, React);