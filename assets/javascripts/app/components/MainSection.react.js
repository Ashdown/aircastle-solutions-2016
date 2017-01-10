(function (React, App) {
    App.Components.MainSection = React.createClass({

        render: function () {

            var projectData = this.props.projectData;
            var projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(<App.Components.ProjectItem key={key} data={projectData[key]} />);
            }

            var allTodos = this.props.allTodos;
            var todos = [];



            for (var key in allTodos) {
                todos.push(<App.Components.TodoItem key={key} todo={allTodos[key]} />);
            }

            return (
                <section id="main">
                    <ul id="project-list">{projectComponents}</ul>
                    <ul id="todo-list">{todos}</ul>
                </section>
                );

        }
    });

})(React, App);