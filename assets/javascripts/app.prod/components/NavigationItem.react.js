(function(React, App) {

    App.Components.NavigationItem = React.createClass({displayName: "NavigationItem",
        render: function() {
            return (
                React.createElement("li", {className: "navigation-item"}, 
                    React.createElement("a", {className: "navigation-link " + this.props.type, href: this.props.url}, this.props.text)
                )

                )
        }
    })

})(React, App);


