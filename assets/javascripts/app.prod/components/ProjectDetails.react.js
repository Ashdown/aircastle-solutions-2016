(function(App, React){

    App.Components.ProjectDetails = React.createClass({displayName: "ProjectDetails",
        render: function() {

            var data = this.props.data;

            var links = [];

            for(var key in data.links) {
                links.push(React.createElement(App.Components.ProjectLinkItem, {key: key, text: data.links[key].text, url: data.links[key].url}))
            }

            return(
                React.createElement("div", {className: "project-details " + this.props.toggleClass + ' ' + this.props.columnClass}, 
                    React.createElement("div", {className: "details-container"}, 
                        React.createElement("h2", {className: "project-title"}, data.title), 
                        React.createElement("a", {className: "close-link", href: "#", onClick: this.props.toggleFunction}, 
                            React.createElement(App.Svg.CloseSvg, null)
                        ), 
                        React.createElement(App.Components.KeywordContainer, {data: data}), 
                        React.createElement(App.Components.ProjectImage, {data: data.images[0], extraClass: "details-image"}), 
                        React.createElement("p", {className: "dates"}, 
                            React.createElement("span", {className: "start-date"}, data.start), 
                            React.createElement("span", {className: "end-date"}, " → ", data.end)
                        ), 
                        React.createElement("p", {className: "description sub-item"}, data.description), 
                        React.createElement("ul", {className: "project-link-list"}, links)
                    )

                )
                );
        }
    });

})(App, React);