(function(React, App) {

    App.Components.NavigationItem = React.createClass({
        render: function() {
            return (
                <li>
                    <a className="navigation-link" href={this.props.url}>{this.props.text}</a>
                </li>

                )
        }
    })

})(React, App);


