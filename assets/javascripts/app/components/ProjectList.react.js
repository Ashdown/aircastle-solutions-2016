(function(React, App) {

    var projectGrid;

    function getState() {

        return { projectData: App.Stores.ProjectStore.getAll() };
    }

    App.Components.ProjectList = React.createClass({

        getInitialState: function () {
            return getState();
        },

        componentDidMount: function () {
            App.Stores.ProjectStore.addChangeListener(this._onChange);
            App.Actions.Project.get();
        },

        componentWillUnmount: function () {
            App.Stores.ProjectStore.removeChangeListener(this._onChange);
        },

        componentDidUpdate: function() {

            if(projectGrid === undefined) {
                projectGrid = new Masonry('.project-list', {
                    itemSelector: '.project-item'
                });
            } else {

                var projectList = document.getElementsByClassName('project-list')[0],
                    projectItems = projectList.getElementsByClassName('project-item');

                if(projectGrid.getItemElements().length < projectItems.length) {
                    projectGrid.appended(projectItems[projectItems.length - 1]);
                }
            }
        },

        render: function() {

            var projectData = this.state.projectData;
            var projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(<App.Components.ProjectItem key={key} data={projectData[key]} />);
            }

            return (
                <ul className="project-list">{projectComponents}</ul>
                );
        },

        _onChange: function () {
            this.setState(getState());
        }

    })

})(React, App);