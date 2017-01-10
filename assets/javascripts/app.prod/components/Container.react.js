(function (React, App) {

    function getState() {

        return {
            projectData: App.Stores.ProjectStore.getAll()
        };
    }

    App.Components.Container = React.createClass({displayName: "Container",
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

        /**
         * @return {object}
         */
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(App.Components.Header, null), 
                    React.createElement(App.Components.MainSection, {
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