(function(App, React) {

    App.Components.SearchKeywordList = React.createClass({

        render: function() {

            var keywordData = this.props.data,
                keywordItems = [],
                visibilityClass = 'invisible';

            if(this.props.searchTerm !== undefined && this.props.searchTerm !== '') {
                visibilityClass = 'visible'
            }

            for(var key in this.props.data) {
                keywordItems.push(<li><a className="keyword-link" href="#" onClick={this.keywordSelect}>{keywordData[key]}</a></li>);
            }

            return (<ul className={"search-keyword-list " + visibilityClass}>{keywordItems}</ul>);
        }
    });

})(App, React);