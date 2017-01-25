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

        inputEnter: function() {
            this.setState({
                inputStatus: 'active'
            });
        },

        inputLeave: function() {
            this.setState({
                inputStatus: 'not-active'
            })
        },

        getInitialState: function() {
            return ({
                hoverClass: '',
                inputStatus: 'not-active'
            });
        },

        render: function() {
            return(
                <div className={"search " + this.state.hoverClass} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <h3 className="search-title" >Search</h3>
                    <form className="search-form" action="#">
                        <input className={"search-input " + this.state.inputStatus} onFocus={this.inputEnter} onBlur={this.inputLeave} type="text" />
                        <input className="search-button" type="submit" value="search" />
                    </form>
                </div>
            );
        }
    });

})(App, React);