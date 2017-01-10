(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {
            var data = this.props.data;

            return(
                <li className="project-item">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <img src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />

                </li>
                );
        }
    })

})(React, App);