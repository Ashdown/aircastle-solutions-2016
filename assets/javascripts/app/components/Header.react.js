(function (React, App) {

    function getState() {

        return {
            headerData: App.Stores.HeaderStore.getContent()
        };
    }

    App.Components.Header = React.createClass({

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
                <header className="header">
                    <h1 className="page-title">Rory Devane</h1>
                    <p className="description-para">Web Development</p>
                    <p className="intro-para">{this.state.headerData.introduction}</p>
                    <App.Components.Navigation />
                </header>
                )
        },

        _onChange: function () {
            this.setState(getState());
        }

    });

})(React, App);