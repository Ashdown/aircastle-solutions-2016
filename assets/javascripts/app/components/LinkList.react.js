(function(React, App){
    App.Components.LinkList = React.createClass({
        render: function(){

            var linkData = this.props.data,
                linkComponents = [];

            for(var key in linkData) {
                linkComponents.push(<App.Components.LinkItem key={key} data={linkData[key]} />);
            }

            return(<ul className="link-list">{linkComponents}</ul>);
        }
    });

})(React, App);