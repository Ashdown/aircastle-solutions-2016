(function(App, React) {

    allKeywords = [];

    App.Components.Search = React.createClass({displayName: "Search",

        formMouseEnter: function() {
            if(this.state.statusClass === 'inactive') {
                this.setState({
                    statusClass: 'hover'
                });
            }
        },

        formMouseLeave: function() {

            if(this.state.statusClass === 'hover') {

                this.setState({
                    statusClass: 'inactive'
                });
            }
        },

        formMouseDown: function(event) {
            event.preventDefault();
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
            this.search();
        },

        inputLeave: function() {
            this.setState({
                statusClass: 'inactive'
            });
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

            var searchString = this.state.searchValue;
            //get value of input

            this.props.filter(searchString);

            if(searchString === '') {
                searchString = 'Search';
            } else {
                searchString = 'Search Results for ' + searchString;
            }

            this.setState({
                searchTitleText: searchString,
                searchValue: ''
            });

            this.refs.searchInput.getDOMNode().blur();
        },

        keywordSelect: function(event) {
            event.preventDefault();
            this.state.searchValue = event.target.innerText;
        },

        getInitialState: function() {
            return ({
                statusClass: 'inactive',
                searchValue: '',
                activeKeywords: [],
                searchTitleText: 'Search'
            });
        },

        componentDidUpdate: function() {
            allKeywords = this.props.data;
        },

        render: function() {

            return(
                React.createElement("div", {className: "search " + this.state.statusClass, 
                    onMouseEnter: this.formMouseEnter, 
                    onMouseLeave: this.formMouseLeave, 
                    onMouseDown: this.formMouseDown, 
                    onSubmit: this.search}, 
                    React.createElement("h3", {className: "search-title"}, this.state.searchTitleText), 
                    React.createElement("form", {className: "search-form", action: "#"}, 
                        React.createElement("input", {className: "search-input", 
                            onBlur: this.inputLeave, 
                            onChange: this.inputChange, 
                            type: "text", 
                            ref: "searchInput", 
                            value: this.state.searchValue}), 
                        React.createElement("a", {onClick: this.clickSearchLink, className: "search-link", target: "#"}, 
                            React.createElement(App.Svg.SearchSvg, null)
                        ), 
                        React.createElement("input", {className: "search-button", type: "submit", value: "search"})
                    ), 
                    React.createElement(App.Components.SearchKeywordList, {
                        data: this.state.activeKeywords, 
                        keywordSelect: this.keywordSelect, 
                        searchTerm: this.state.searchValue})
                )
            );
        }
    });

})(App, React);