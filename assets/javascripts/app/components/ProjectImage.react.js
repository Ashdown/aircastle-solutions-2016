(function(react, app) {

    App.Components.ProjectImage = React.createClass({
        render: function() {

            var data = this.props.data,
                imageLoadedEvent = new Event('imageLoaded'),
                parentList = this.props.parentList;

            function imageLoaded() {
                parentList.getDOMNode().dispatchEvent(imageLoadedEvent);
            }

            return(
                <img className={"project-image " + this.props.extraClass} onLoad={imageLoaded} src={data.url} alt={data.alt} height={data.height} width={data.width} />
                )
        }
    })

})(React, App);