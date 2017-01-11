(function (React, App, Masonry) {

    App.Components.MainSection = React.createClass({displayName: "MainSection",

        render: function () {

            return (
                React.createElement("section", {id: "main"}, 
                    React.createElement(App.Components.ProjectList, null)
                )
                );

        }
    });

})(React, App, Masonry);