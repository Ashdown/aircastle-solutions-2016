(function(App, React) {

    App.Components.Search = React.createClass({

        mouseEnter: function() {
            this.setState({
                hoverClass: 'hover'
            });
        },

        mouseLeave: function() {
            this.setState({
                hoverClass: ''
            });
        },

        formClick: function() {
            this.refs.searchInput.getDOMNode().focus();
            this.setState({
                inputStatus: 'input-active'
            });
        },

        inputLeave: function() {
            this.setState({
                inputStatus: 'input-inactive'
            })
        },

        getInitialState: function() {
            return ({
                hoverClass: '',
                inputStatus: 'input-inactive'
            });
        },

        render: function() {
            return(
                <div className={"search " + this.state.hoverClass + ' ' + this.state.inputStatus} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.formClick}>
                    <h3 className="search-title" >Search</h3>
                    <form className="search-form" action="#">
                        <input className="search-input" onBlur={this.inputLeave} type="text" ref="searchInput"/>
                        <input className="search-button" type="submit" value="search" />
                    </form>
                </div>
            );
        }
    });

})(App, React);