(function (React, App) {

    function getState() {

        return {
            projectData: App.Stores.ProjectStore.getAll()
        };
    }

    App.Components.Container = React.createClass({
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
                <div>
                    <App.Components.Header />
                    <App.Components.MainSection
                    projectData={this.state.projectData}
                    areAllComplete={this.state.areAllComplete}
                    />
                    <App.Components.Footer />
                </div>
                );
        },

        _onChange: function () {
            this.setState(getState());
        }

    });

})(React, App);