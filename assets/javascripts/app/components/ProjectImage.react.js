(function(react, app) {

    App.Components.ProjectImage = React.createClass({
        render: function() {

            var data = this.props.data;

            return(
                <img className={"project-image " + this.props.extraClass} src={data.url} alt={data.alt} height={data.height} width={data.width} />
                )
        }
    })

})(React, App);