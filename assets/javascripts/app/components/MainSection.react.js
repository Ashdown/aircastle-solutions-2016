(function (React, App, Masonry) {

    App.Components.MainSection = React.createClass({

        render: function () {

            return (
                <section id="main">
                    <App.Components.ProjectList />
                </section>
                );

        }
    });

})(React, App, Masonry);