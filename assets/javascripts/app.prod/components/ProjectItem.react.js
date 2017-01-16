(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        getInitialState: function() {
          return({
              detailsToggleClass: 'closed'
          });
        },

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        toggleDetails: function(event) {
            event.preventDefault();
            this.setState({
                detailsToggleClass: this.state.detailsToggleClass === 'closed' ? 'open' : 'closed'
            });
        },

        render: function() {
            var data = this.props.data;



            return(
                React.createElement("li", {className: "project-item invisible " + data.type}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("a", {className: "details-link", onClick: this.toggleDetails, href: "#"}), 
                        React.createElement(App.Components.ProjectDetails, {data: data, toggleClass: this.state.detailsToggleClass, toggleFunction: this.toggleDetails}), 

                        React.createElement("div", {className: "image-container"}, 
                            React.createElement("img", {className: "image", src: data.image.src, alt: data.image.alt, height: data.image.height, width: data.image.width})
                        ), 
                        React.createElement(App.Components.KeywordContainer, {data: data})

                    )
                )
                );
        }
    })

})(React, App);