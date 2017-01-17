(function(react, app) {

    App.Components.ProjectLinkItem = React.createClass({displayName: "ProjectLinkItem",

        propTypes: {
            text: React.PropTypes.object.isRequired,
            url: React.PropTypes.object.isRequired
        },

        render:function() {

            var url = this.props.url;
            var text = this.props.text;

            return (
                <li className="project-link-item">
                    <a className="project-link" href={url}>{text}</a>
                </li>
                );

        }
    });
})(React, App);
