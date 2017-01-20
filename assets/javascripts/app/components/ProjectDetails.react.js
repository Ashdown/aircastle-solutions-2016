(function(App, React){

    App.Components.ProjectDetails = React.createClass({
        render: function() {

            var data = this.props.data;

            var links = [];

            for(var key in data.links) {
                links.push(<App.Components.ProjectLinkItem key={key} text={data.links[key].text} url={data.links[key].url} />)
            }

            return(
                <div className={"project-details " + this.props.toggleClass + ' ' + this.props.columnClass}>
                    <div className="details-container">
                        <h2 className="project-title">{data.title}</h2>
                        <a className="close-link" href="#" onClick={this.props.toggleFunction}>
                            <App.Svg.CloseSvg />
                        </a>
                        <App.Components.KeywordContainer data={data} />
                        <img className="details-image" src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />
                        <p className="dates">
                            <span className="start-date">{data.start}</span>
                            <span className="end-date"> → {data.end}</span>
                        </p>
                        <p className="description sub-item">{data.description}</p>
                        <ul className="project-link-list">{links}</ul>
                    </div>

                </div>
                );
        }
    });

})(App, React);