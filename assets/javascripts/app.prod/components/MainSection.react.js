(function (React, App, Masonry) {

    function getState() {
        return { projectData: App.Stores.ProjectStore.getAll() };
    }



    App.Components.MainSection = React.createClass({displayName: "MainSection",

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

        render: function () {

            var projectData = this.state.projectData;

            return (
                React.createElement("section", {id: "main"}, 
                    React.createElement(App.Components.ProjectList, {data: projectData})
                )
                );

        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App, Masonry);