(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {
            var data = this.props.data;

            return(
                <li className="project-item">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </li>
                );
        }
    })

})(React, App);