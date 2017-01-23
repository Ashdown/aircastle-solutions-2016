(function(App, React){

    App.Components.KeywordContainer = React.createClass({displayName: "KeywordContainer",
        render: function() {

            var data = this.props.data;

            var keywords = [];

            for(var key in data.keywords) {
                keywords.push(React.createElement("li", {key: key, className: "keyword"}, data.keywords[key]));
            }

            return (
                React.createElement("div", {className: "keyword-container"}, 
                    React.createElement("ul", null, keywords)
                )
                )
        }
    })

})(App, React);