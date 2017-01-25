(function(App, React) {

    allKeywords = [];

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
                    statusClass: 'active',
                    activeKeywords: allKeywords
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

            var newInputValue = event.target.value,
                newKeywords = {};

            for(var i in allKeywords) {
                if (allKeywords[i].indexOf(newInputValue) !== -1) {
                    newKeywords[i] = allKeywords[i];
                }
            }

            this.setState({
                searchValue: newInputValue,
                activeKeywords: newKeywords
            });
        },

        search: function(event) {
            event.preventDefault();
            //get value of input
            console.log('search', this.state.searchValue);
        },

        keywordSelect: function(event) {
            event.preventDefault();
            this.state.searchValue = event.target.innerText;
        },

        getInitialState: function() {
            return ({
                statusClass: 'inactive',
                searchValue: '',
                activeKeywords: []
            });
        },

        componentDidUpdate: function() {
            allKeywords = this.props.data;
        },

        render: function() {

            return(
                <div className={"search " + this.state.statusClass} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.formClick} onSubmit={this.search}>
                    <h3 className="search-title" >Search</h3>
                    <form className="search-form" action="#">
                        <input className="search-input"
                            onBlur={this.inputLeave}
                            onChange={this.inputChange}
                            type="text"
                            ref="searchInput"
                            value={this.state.searchValue}/>
                        <a onClick={this.clickSearchLink} className="search-link" target="#">
                            <App.Svg.SearchSvg />
                        </a>
                        <input className="search-button" type="submit" value="search" />
                    </form>
                    <App.Components.SearchKeywordList data={this.state.activeKeywords} keywordSelect={this.keywordSelect}/>
                </div>
            );
        }
    });

})(App, React);