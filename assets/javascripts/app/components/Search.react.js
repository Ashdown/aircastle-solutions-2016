(function(App, React) {

    App.Components.Search = React.createClass({

        mouseEnter: function() {
            if(this.state.statusClass === 'inactive') {
                this.setState({
                    statusClass: 'hover'
                });
            }
        },

        mouseLeave: function() {

            if(this.state.statusClass === 'hover') {

                this.setState({
                    statusClass: 'inactive'
                });
            }
        },

        formClick: function(event) {
            if (this.state.statusClass !== 'active') {
                this.setState({
                    statusClass: 'active'
                });
            } else {
                this.search(event);
            }
            this.refs.searchInput.getDOMNode().focus();
        },

        clickSearchLink: function(event) {
            event.preventDefault();
            console.log('click search link');
            this.search();
        },

        inputLeave: function() {
            //TODO
        },

        inputChange: function(event) {

            this.setState({
                searchValue: event.target.value
            });
        },

        search: function(event) {
            event.preventDefault();
            //get value of input
            console.log('search', this.state.searchValue);
        },

        getInitialState: function() {
            return ({
                statusClass: 'inactive',
                searchValue: ''
            });
        },

        render: function() {
            return(
                <div className={"search " + this.state.statusClass} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.formClick} onSubmit={this.search}>
                    <h3 className="search-title" >Search</h3>
                    <form className="search-form" action="#">
                        <input className="search-input"
                            onBlur={this.inputLeave}
                            onChange={this. inputChange}
                            type="text"
                            ref="searchInput"
                            value={this.state.searchValue}/>
                        <a onClick={this.clickSearchLink} className="search-link" target="#">
                            <App.Svg.SearchSvg />
                        </a>
                        <input className="search-button" type="submit" value="search" />
                    </form>
                </div>
            );
        }
    });

})(App, React);