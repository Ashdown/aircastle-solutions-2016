(function (React, App) {
    App.Components.MainSection = React.createClass({displayName: "MainSection",

        render: function () {

            var projectData = this.props.projectData;
            var projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(React.createElement(App.Components.ProjectItem, {key: key, data: projectData[key]}));
            }

            var allTodos = this.props.allTodos;
            var todos = [];



            for (var key in allTodos) {
                todos.push(React.createElement(App.Components.TodoItem, {key: key, todo: allTodos[key]}));
            }

            return (
                React.createElement("section", {id: "main"}, 
                    React.createElement("ul", {id: "project-list"}, projectComponents), 
                    React.createElement("ul", {id: "todo-list"}, todos)
                )
                );

        }
    });

})(React, App);