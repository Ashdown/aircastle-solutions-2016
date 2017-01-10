(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {
            var data = this.props.data;

            return(
                React.createElement("li", {className: "project-item"}, 
                    React.createElement("h2", null, data.title), 
                    React.createElement("p", null, data.description)
                )
                );
                //React.createElement('li', {className: 'project-item', key: data.id}, data.title));
        }
    })

})(React, App);