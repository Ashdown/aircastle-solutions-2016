(function (React, App, Masonry) {

    function getState() {

        return {
            projectData: App.Stores.ProjectStore.getAll(),
            aboutData: App.Stores.AboutStore.getContent()
        };
    }

    App.Components.MainSection = React.createClass({

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
                <section id="main">
                    <h2 className="sub-title">My Portfolio</h2>
                    <App.Components.ProjectList data={this.state.projectData}/>
                    <h2 className="sub-title">About</h2>
                    <App.Components.About data={this.state.aboutData}/>
                </section>
                );

        },

        _onChange: function () {
            console.log('set state');
            this.setState(getState());
            console.log(this.state.aboutData);
        }
    });

})(React, App, Masonry);