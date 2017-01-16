(function (React, App, Masonry) {

    function getState() {

        return {
            projectData: App.Stores.ProjectStore.getAll(),
            aboutData: App.Stores.AboutStore.getContent()
        };
    }

    App.Components.MainSection = React.createClass({displayName: "MainSection",

        getInitialState: function () {
            return getState();
        },

        componentDidMount: function () {
            App.Stores.ProjectStore.addChangeListener(this._onChange);
            App.Actions.Project.get();
            App.Stores.AboutStore.addChangeListener(this._onChange);
            App.Actions.About.get();
        },

        componentWillUnmount: function () {
            App.Stores.ProjectStore.removeChangeListener(this._onChange);
            App.Stores.AboutStore.removeChangeListener(this._onChange);
        },

        render: function () {

            return (
                React.createElement("section", {id: "main"}, 
                    React.createElement("h2", {className: "sub-title"}, "My Portfolio"), 
                    React.createElement(App.Components.ProjectList, {data: this.state.projectData}), 
                    React.createElement("h2", {className: "sub-title"}, "About"), 
                    React.createElement(App.Components.About, {data: this.state.aboutData})
                )
                );

        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App, Masonry);