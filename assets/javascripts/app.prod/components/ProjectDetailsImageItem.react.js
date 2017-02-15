(function(App, React, window) {
    App.Components.ProjectDetailsImageItem = React.createClass({displayName: "ProjectDetailsImageItem",

        showImage: function(event) {

            event.preventDefault();

            var popupEvent = new CustomEvent(App.Constants.PopUpConstants.UPDATE_POP_UP, {detail: this.props.data});
            window.dispatchEvent(popupEvent);

        },

        render: function() {


            var imageState = this.props.loadImage ? 'load' : 'lazy';

            return(
                React.createElement("li", null, 
                    React.createElement("a", {href: "#", onClick: this.showImage}, 
                        React.createElement(App.Components.ProjectImage, {
                            data: this.props.data, 
                            extraClass: "details-image", 
                            parentList: this.props.parentList, 
                            imageState: imageState})
                    )
                )
                );
        }
    })
})(App, React, window);