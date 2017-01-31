(function(React, App) {

    App.Components.NavigationItem = React.createClass({
        render: function() {
            return (
                <li className="navigation-item">
                    <a className={"navigation-link " + this.props.type} href={this.props.url}>{this.props.text}</a>
                </li>

                )
        }
    })

})(React, App);


