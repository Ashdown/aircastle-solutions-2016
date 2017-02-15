(function (React, App) {

    function getState() {

        return {
            headerData: App.Stores.HeaderStore.getContent()
        };
    }

    App.Components.Header = React.createClass({displayName: "Header",

        getInitialState: function () {
            return getState();
        },

        componentDidMount: function () {
            App.Stores.HeaderStore.addChangeListener(this._onChange);
            App.Actions.Header.get();
        },

        componentWillUnmount: function () {
            App.Stores.HeaderStore.removeChangeListener(this._onChange);
        },

        render: function () {

            return (
                React.createElement("header", {className: "header"}, 
                    React.createElement("h1", {className: "page-title"}, "Rory Devane"), 
                    React.createElement("p", {className: "description-para"}, "Web Development"), 
                    React.createElement("p", {className: "intro-para"}, this.state.headerData.introduction), 
                    React.createElement(App.Components.Navigation, null)
                )
                )
        },

        _onChange: function () {
            this.setState(getState());
        }

    });

})(React, App);