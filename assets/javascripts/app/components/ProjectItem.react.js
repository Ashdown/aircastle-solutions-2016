(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        render: function() {
            var data = this.props.data;

            var links = [];

            for(var i = 0; i < data.links.length; i++) {
                links.push(<App.Components.ProjectLinkItem text={data.links[i].text} url={data.links[i].url} />)
            }

            var keywords = [];

            for(var i = 0; i < data.keywords.length; i++) {
                keywords.push(<li>{data.keywords[i]}</li>);
            }

            return(
                <li className="project-item">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <img src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />
                    <h3>Links</h3>
                    <ul>{links}</ul>
                    <h3>Keywords</h3>
                    <ul>{keywords}</ul>
                </li>
                );
        }
    })

})(React, App);