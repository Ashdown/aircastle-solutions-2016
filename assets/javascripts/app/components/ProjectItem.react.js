(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {
            var data = this.props.data;

            return(React.createElement('li', {key: data.id}, data.title));
        }
    })

})(React, App);