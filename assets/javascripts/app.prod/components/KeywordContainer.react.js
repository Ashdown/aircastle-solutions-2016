(function(App, React){

    App.Components.KeywordContainer = React.createClass({displayName: "KeywordContainer",
        render: function() {

            var data = this.props.data;

            var keywords = [];

            for(var i = 0; i < data.keywords.length; i++) {
                keywords.push(React.createElement("li", {className: "keyword"}, data.keywords[i]));
            }

            return (
                React.createElement("div", {className: "keyword-container"}, 
                    React.createElement("ul", null, keywords)
                )
                )
        }
    })

})(App, React);