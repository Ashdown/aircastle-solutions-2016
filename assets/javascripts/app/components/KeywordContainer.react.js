(function(App, React){

    App.Components.KeywordContainer = React.createClass({
        render: function() {

            var data = this.props.data;

            var keywords = [];

            for(var key in data.keywords) {
                keywords.push(<li key={key} className="keyword">{data.keywords[key]}</li>);
            }

            return (
                <div className="keyword-container">
                    <ul>{keywords}</ul>
                </div>
                )
        }
    })

})(App, React);