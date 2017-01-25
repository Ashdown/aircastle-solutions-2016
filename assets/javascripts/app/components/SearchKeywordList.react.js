(function(App, React) {

    App.Components.SearchKeywordList = React.createClass({

        render: function() {

            var keywordData = this.props.data,
                keywordItems = [];

            for(var key in this.props.data) {
                keywordItems.push(<li><a className="keyword-link" href="#" onClick={this.keywordSelect}>{keywordData[key]}</a></li>);
            }

            return (<ul className="keyword-list">{keywordItems}</ul>);
        }
    });

})(App, React);