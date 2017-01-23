(function(React, App, Masonry) {

    var projectGrid,
        updateGridTimeout;

    App.Components.ProjectList = React.createClass({

        componentDidUpdate: function() {

            var layoutCompleteEvent = new Event('gridReady'),
                projectList = React.findDOMNode(this);

            if(projectGrid === undefined) {

                projectGrid = new Masonry('.project-list', {
                    itemSelector: '.project-item',
                    transitionDuration: 0
                });

                projectGrid.on('layoutComplete', function() {
                    projectList.dispatchEvent(layoutCompleteEvent);
                });

            } else {

                var projectItems = projectList.getElementsByClassName('project-item');

                if(projectGrid.getItemElements().length < projectItems.length) {

                    projectGrid.appended(projectItems[projectItems.length - 1]);

                    window.clearTimeout(updateGridTimeout)
                    updateGridTimeout = window.setTimeout(function() {
                        projectGrid.layout();
                    }, 100);

                }
            }

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