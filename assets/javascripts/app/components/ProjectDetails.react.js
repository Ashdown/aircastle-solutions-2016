(function(App, React){

    App.Components.ProjectDetails = React.createClass({
        render: function() {

            var data = this.props.data;

            var links = [];

            for(var i = 0; i < data.links.length; i++) {
                links.push(<App.Components.ProjectLinkItem text={data.links[i].text} url={data.links[i].url} />)
            }

            return(
                <div className={"project-details " + this.props.toggleClass + ' ' + this.props.columnClass}>
                    <h2 className="project-title">{data.title}</h2>
                    <a className="close-link" href="#" onClick={this.props.toggleFunction}>
                        <App.Components.CloseSvg />
                    </a>
                    <App.Components.KeywordContainer data={data} />
                    <img className="details-image" src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />
                    <p className="sub-item">
                        <span className="start-date">{data.start}</span>
                        <span className="end-date"> → {data.end}</span>
                    </p>
                    <p className="description sub-item">{data.description}</p>
                    <ul className="project-link-list sub-item">{links}</ul>

                </div>
                );
        }
    });

})(App, React);