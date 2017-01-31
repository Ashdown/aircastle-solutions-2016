(function (React, App) {

    function getState() {

        return {
            aboutData: App.Stores.AboutStore.getContent(),
            linkData: App.Stores.LinkStore.getAll()
        };
    }

    App.Components.MainSection = React.createClass({displayName: "MainSection",

        getInitialState: function () {
            return getState();
        },

        componentDidMount: function () {
            App.Stores.AboutStore.addChangeListener(this._onChange);
            App.Actions.About.get();
            App.Stores.LinkStore.addChangeListener(this._onChange);
            App.Actions.Link.get();

        },

        componentWillUnmount: function () {
            App.Stores.AboutStore.removeChangeListener(this._onChange);
            App.Stores.LinkStore.removeChangeListener(this._onChange);
        },

        render: function () {

            return (
                React.createElement("section", {id: "main", className: "main-section"}, 
                    React.createElement("h2", {id: "portfolio", className: "sub-title portfolio-sub-title"}, "My Portfolio"), 
                    React.createElement(App.Components.Portfolio, null), 
                    React.createElement("h2", {id: "about", className: "sub-title about-sub-title"}, "About"), 
                    React.createElement(App.Components.About, {data: this.state.aboutData}), 
                    React.createElement("h2", {id: "links", className: "sub-title links-sub-title"}, "Links"), 
                    React.createElement(App.Components.LinkList, {data: this.state.linkData})
                )
                );

        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App);