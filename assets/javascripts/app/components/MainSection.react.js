(function (React, App, Masonry) {

    function getState() {
        return { projectData: App.Stores.ProjectStore.getAll() };
    }



    App.Components.MainSection = React.createClass({

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
                <section id="main">
                    <App.Components.ProjectList data={projectData}/>
                </section>
                );

        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App, Masonry);