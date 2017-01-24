(function(App, React){

    function clean(text) {
        return text.replace(/&#8217;/, "'");
    }

    function breakLine(text) {
        var regex = /(<br\/>)/g;

        return text.split(regex).map(function(line) {
            return line.match(regex) ? React.createElement('br') : line;
        });
    }

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
                        <h2 className="project-title">{clean(data.title)}</h2>
                        <a className="close-link" href="#" onClick={this.props.toggleFunction}>
                            <App.Svg.CloseSvg />
                        </a>
                        <App.Components.KeywordContainer data={data} />
                        <App.Components.ProjectImage data={data.images[0]} extraClass="details-image"/>
                        <p className="dates">
                            <span className="start-date">{data.start}</span>
                            <span className="end-date"> → {data.end}</span>
                        </p>
                        <p className="description sub-item">{breakLine(data.description)}</p>
                        <ul className="project-link-list">{links}</ul>
                    </div>

                </div>
                );
        }
    });

})(App, React);