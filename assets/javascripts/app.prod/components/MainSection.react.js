(function (React, App) {

    function getState() {

        return {
            projectData: App.Stores.ProjectStore.getAll(),
            aboutData: App.Stores.AboutStore.getContent(),
            linkData: App.Stores.LinkStore.getAll()
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
            App.Stores.LinkStore.addChangeListener(this._onChange);
            App.Actions.Link.get();

        },

        componentWillUnmount: function () {
            App.Stores.ProjectStore.removeChangeListener(this._onChange);
            App.Stores.AboutStore.removeChangeListener(this._onChange);
            App.Stores.LinkStore.removeChangeListener(this._onChange);
        },

        render: function () {

            return (
                React.createElement("section", {id: "main", className: "main-section"}, 
                    React.createElement("h2", {className: "sub-title"}, "My Portfolio"), 
                    React.createElement(App.Components.ProjectList, {data: this.state.projectData}), 
                    React.createElement("h2", {className: "sub-title"}, "About"), 
                    React.createElement(App.Components.About, {data: this.state.aboutData}), 
                    React.createElement("h2", {className: "sub-title"}, "Links"), 
                    React.createElement(App.Components.LinkList, {data: this.state.linkData})
                )
                );

        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App);