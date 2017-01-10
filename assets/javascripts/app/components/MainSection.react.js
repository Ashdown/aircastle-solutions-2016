(function (React, App) {
    App.Components.MainSection = React.createClass({

        render: function () {

            var projectData = this.props.projectData;
            var projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(<App.Components.ProjectItem key={key} data={projectData[key]} />);
            }

            return (
                <section id="main">
                    <ul id="project-list">{projectComponents}</ul>
                </section>
                );

        }
    });

})(React, App);