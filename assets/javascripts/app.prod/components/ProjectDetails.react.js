(function(App, React){

    App.Components.ProjectDetails = React.createClass({displayName: "ProjectDetails",
        render: function() {

            var data = this.props.data;

            var links = [];

            for(var i = 0; i < data.links.length; i++) {
                links.push(React.createElement(App.Components.ProjectLinkItem, {text: data.links[i].text, url: data.links[i].url}))
            }

            return(
                React.createElement("div", {className: "project-details " + this.props.toggleClass + ' ' + this.props.columnClass}, 
                    React.createElement("div", {className: "details-container"}, 
                        React.createElement("h2", {className: "project-title"}, data.title), 
                        React.createElement("a", {className: "close-link", href: "#", onClick: this.props.toggleFunction}, 
                            React.createElement(App.Svg.CloseSvg, null)
                        ), 
                        React.createElement(App.Components.KeywordContainer, {data: data}), 
                        React.createElement("img", {className: "details-image", src: data.image.src, alt: data.image.alt, height: data.image.height, width: data.image.width}), 
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