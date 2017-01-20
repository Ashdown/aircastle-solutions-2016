(function(React, App, Masonry) {

    var projectGrid;

    App.Components.ProjectList = React.createClass({

        componentDidUpdate: function() {

            var layoutCompleteEvent = new Event('gridReady'),
                projectList = React.findDOMNode(this);

            if(projectGrid === undefined) {
                projectGrid = new Masonry('.project-list', {
                    itemSelector: '.project-item',
                    transitionDuration: 0
                });

            } else {

                var projectItems = projectList.getElementsByClassName('project-item');

                if(projectGrid.getItemElements().length < projectItems.length) {
                    projectGrid.appended(projectItems[projectItems.length - 1]);
                }
            }
            projectGrid.on('layoutComplete', function() {
                projectList.dispatchEvent(layoutCompleteEvent);
            });

        },

        render: function() {

            var projectData = this.props.data,
                projectList = this,
                projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(<App.Components.ProjectItem key={key} data={projectData[key]} parentList={projectList} />);
            }

            return (<ul className="project-list" ref="project">{projectComponents}</ul>);
        }

    });

})(React, App, Masonry);