(function(App, React){

    App.Components.KeywordContainer = React.createClass({
        render: function() {

            var data = this.props.data;

            var keywords = [];

            for(var i = 0; i < data.keywords.length; i++) {
                keywords.push(<li className="keyword">{data.keywords[i]}</li>);
            }

            return (
                <div className="keyword-container">
                    <ul>{keywords}</ul>
                </div>
                )
        }
    })

})(App, React);