(function(App, React) {

    App.Components.Search = React.createClass({
        render: function() {
            return(
                <div className="search">
                    <h3>Search</h3>
                    <form action="#">
                        <input className="search-input" type="text" />
                        <input type="submit" value="search" />
                    </form>
                </div>
            );
        }
    });

})(App, React);