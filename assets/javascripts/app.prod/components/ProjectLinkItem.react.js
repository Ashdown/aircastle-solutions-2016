(function(react, app) {

    App.Components.ProjectLinkItem = React.createClass({displayName: "ProjectLinkItem",

        propTypes: {
            text: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired
        },

        render:function() {

            var url = this.props.url;
            var text = this.props.text;

            return (
                React.createElement("li", {className: "project-link-item"}, 
                    React.createElement("a", {className: "project-link", href: url}, text)
                )
                );

        }
    });
})(React, App);
