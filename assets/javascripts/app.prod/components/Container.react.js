(function (React, App) {

    function getState() {

        return {
            allTodos: App.Stores.TodoStore.getAll(),
            projectData: App.Stores.ProjectStore.getAll()
        };
    }

    App.Components.Container = React.createClass({displayName: "Container",
        getInitialState: function () {
            return getState();
        },

        componentDidMount: function () {
            App.Stores.TodoStore.addChangeListener(this._onChange);
            App.Stores.ProjectStore.addChangeListener(this._onChange);
            App.Actions.Project.get();
        },

        componentWillUnmount: function () {
            App.Stores.TodoStore.removeChangeListener(this._onChange);
            App.Stores.ProjectStore.removeChangeListener(this._onChange);
        },

        /**
         * @return {object}
         */
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(App.Components.Header, null), 
                    React.createElement(App.Components.MainSection, {
                    allTodos: this.state.allTodos, 
                    projectData: this.state.projectData, 
                    areAllComplete: this.state.areAllComplete}
                    ), 
                    React.createElement(App.Components.Footer, null)
                )
                );
        },

        _onChange: function () {
            this.setState(getState());
        }

    });

})(React, App);