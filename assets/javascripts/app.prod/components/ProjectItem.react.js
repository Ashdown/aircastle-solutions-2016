(function(react, app, window) {

    var parentList;

    var getScreenType = function() {
        if(window.innerWidth >= 1024) {
            return 'desktop';
        } else if(window.innerWidth >= 640) {
            return 'tablet';
        } else {
            return 'mobile';
        }
    };

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        getInitialState: function() {
          return({
              detailsToggleClass: 'closed',
              columnClass: ''
          });
        },

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        toggleDetails: function(event) {
            event.preventDefault();

            var listWidth = parentList.getDOMNode().offsetWidth; //window.innerWidth - 8,
                columnClass = 'column-one';

            switch(getScreenType(window)) {
                case 'mobile':
                    if(this.refs.item.getDOMNode().offsetLeft >= listWidth/2) {
                        columnClass = 'column-two'
                    }
                    break;
                case 'tablet':
                case 'desktop':

                    var columnWidth = listWidth/ 3,
                        offset = this.refs.item.getDOMNode().offsetLeft + 8;

                    if(offset >= columnWidth) {
                        if(offset >= columnWidth * 2) {
                            columnClass = 'column-three'
                        } else {
                            columnClass = 'column-two'
                        }
                    }
                    break;
            }

            this.setState({
                detailsToggleClass: this.state.detailsToggleClass === 'closed' ? 'open' : 'closed',
                columnClass: columnClass
            });
        },

        render: function() {
            var data = this.props.data;
            parentList = this.props.parentList;

            return(
                React.createElement("li", {className: "project-item invisible " + data.type, ref: "item"}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("a", {className: "details-link", onClick: this.toggleDetails, href: "#"}), 
                        React.createElement(App.Components.ProjectDetails, {
                            data: data, 
                            toggleClass: this.state.detailsToggleClass, 
                            toggleFunction: this.toggleDetails, 
                            columnClass: this.state.columnClass}), 

                        React.createElement("div", {className: "image-container"}, 
                            React.createElement("img", {className: "image", src: data.image.src, alt: data.image.alt, height: data.image.height, width: data.image.width})
                        ), 
                        React.createElement(App.Components.KeywordContainer, {data: data})

                    )
                )
                );
        }
    })

})(React, App, window);