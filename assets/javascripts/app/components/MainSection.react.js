(function (React, App, Masonry) {

    var projectGrid;

    App.Components.MainSection = React.createClass({

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

        render: function () {

            var projectData = this.props.projectData;
            var projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(<App.Components.ProjectItem key={key} data={projectData[key]} />);
            }

            return (
                <section id="main">
                    <ul className="project-list">{projectComponents}</ul>
                </section>
                );

        }
    });

})(React, App, Masonry);