(function(App, React) {

    App.Components.SearchKeywordList = React.createClass({displayName: "SearchKeywordList",

        render: function() {

            var keywordData = this.props.data,
                keywordItems = [],
                visibilityClass = 'invisible';

            if(this.props.searchTerm !== undefined && this.props.searchTerm !== '') {
                visibilityClass = 'visible'
            }

            for(var key in this.props.data) {
                keywordItems.push(React.createElement("li", null, React.createElement("a", {className: "keyword-link", href: "#", onMouseDown: this.props.keywordSelect}, keywordData[key])));
            }

            return (React.createElement("ul", {className: "search-keyword-list " + visibilityClass}, keywordItems));
        }
    });

})(App, React);