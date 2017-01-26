(function(App, React, Helpers) {

    function generateKeywords(projectData) {
        var keywords = {};

        for(var i in projectData) {
            for(var key in projectData[i].keywords) {
                keywords[projectData[i].keywords[key].replace(/\W/g,'_')] = projectData[i].keywords[key];
            }
        }

        return Helpers.orderObjectByKey(keywords);
    }

    function getState() {

        var allProjects = App.Stores.ProjectStore.getAll();

        return {
            projectData: allProjects,
            keywords: generateKeywords(allProjects)
        };
    }

    App.Components.Portfolio = React.createClass({

        getInitialState: function () {
            return getState();
        },

        filterProjectsByKeyword: function(keyword) {

            App.Stores.ProjectStore.filterByKeyword(keyword);
            this.setState({
                projectData: App.Stores.ProjectStore.getAll(),
            });

        },

        componentDidMount: function () {
            App.Stores.ProjectStore.addChangeListener(this._onChange);
            App.Actions.Project.get();
        },

        componentWillUnmount: function () {
            App.Stores.ProjectStore.removeChangeListener(this._onChange);
        },

        render: function() {
            return(
                <div>
                    <App.Components.Search data={this.state.keywords} filter={this.filterProjectsByKeyword} />
                    <App.Components.ProjectList data={this.state.projectData} />
                </div>
                )
        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(App, React, window.helpers);