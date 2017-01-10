(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {
            var data = this.props.data;

            var links = [];

            for(var i = 0; i < data.links.length; i++) {
                links.push(React.createElement(App.Components.ProjectLinkItem, {text: data.links[i].text, url: data.links[i].url}))
            }

            var keywords = [];

            for(var i = 0; i < data.keywords.length; i++) {
                keywords.push(React.createElement("li", null, data.keywords[i]));
            }

            return(
                React.createElement("li", {className: "project-item"}, 
                    React.createElement("h2", null, data.title), 
                    React.createElement("p", null, data.description), 
                    React.createElement("img", {src: data.image.src, alt: data.image.alt, height: data.image.height, width: data.image.width}), 
                    React.createElement("h3", null, "Links"), 
                    React.createElement("ul", null, links), 
                    React.createElement("h3", null, "Keywords"), 
                    React.createElement("ul", null, keywords), 
                    React.createElement("h3", null, "Start Date"), 
                    React.createElement("p", null, data.start), 
                    React.createElement("h3", null, "End Date"), 
                    React.createElement("p", null, data.end)
                )
                );
        }
    })

})(React, App);