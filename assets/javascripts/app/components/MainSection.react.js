(function (React, App) {

    function getState() {

        return {
            projectData: App.Stores.ProjectStore.getAll(),
            aboutData: App.Stores.AboutStore.getContent(),
            linkData: App.Stores.LinkStore.getAll()
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
                <section id="main" className="main-section">
                    <h2 id="portfolio"className="sub-title">My Portfolio</h2>
                    <App.Components.ProjectList data={this.state.projectData}/>
                    <h2 id="about" className="sub-title">About</h2>
                    <App.Components.About data={this.state.aboutData}/>
                    <h2 id="links" className="sub-title">Links</h2>
                    <App.Components.LinkList data={this.state.linkData}/>
                </section>
                );

        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App);