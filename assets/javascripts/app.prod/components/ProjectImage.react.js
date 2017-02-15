(function(react, app) {

    App.Components.ProjectImage = React.createClass({displayName: "ProjectImage",

        render: function() {

            var data = this.props.data,
                imageLoadedEvent = new Event('imageLoaded'),
                parentList = this.props.parentList,
                imageSrc = '/assets/placeholder.jpg';

            function imageLoaded() {
                parentList.getDOMNode().dispatchEvent(imageLoadedEvent);
            }

            if(this.props.imageState !== 'lazy') {
                imageSrc = data.url;
            }

            return(
                React.createElement("img", {className: "project-image " + this.props.extraClass, 
                    onLoad: imageLoaded, 
                    src: imageSrc, 
                    alt: data.alt, 
                    height: data.height, 
                    width: data.width})
                )
        }
    })

})(React, App);