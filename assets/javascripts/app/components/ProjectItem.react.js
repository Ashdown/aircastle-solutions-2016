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
                keywords.push(<li className="keyword">{data.keywords[i]}</li>);
            }

            return(
                <li className={"project-item invisible " + data.type}>
                    <div className="container">
                        <div className="project-details">
                            <h2 className="project-title">{data.title}</h2>
                            <p className="description">{data.description}</p>
                            <h3 className="sub-title">Links</h3>
                            <ul>{links}</ul>
                            <h3 className="sub-title" >Start Date</h3>
                            <p className="sub-item">{data.start}</p>
                            <h3 className="sub-title" >End Date</h3>
                            <p className="sub-item">{data.end}</p>
                        </div>

                        <img className="image" src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />

                        <div className="keyword-container">
                            <ul>{keywords}</ul>
                        </div>


                    </div>
                </li>
                );
        }
    })

})(React, App);