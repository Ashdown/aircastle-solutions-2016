(function(react, app) {

    App.Components.ProjectLink = React.createClass({displayName: "ProjectLink",

        propTypes: {
            text: React.PropTypes.object.isRequired,
            url: React.PropTypes.object.isRequired
        },

        render:function() {

            var url = this.props.url;
            var text = this.props.text;

            return (
                <li>
                    <a href={url}>{text}</a>
                </li>
                );

        }
    });
})(React, App);
