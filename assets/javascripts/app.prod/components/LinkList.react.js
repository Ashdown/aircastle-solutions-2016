(function(React, App){
    App.Components.LinkList = React.createClass({displayName: "LinkList",
        render: function(){

            var linkData = this.props.data,
                linkComponents = [];

            for(var key in linkData) {
                linkComponents.push(React.createElement(App.Components.LinkItem, {key: key, data: linkData[key]}));
            }

            return(React.createElement("ul", {className: "link-list"}, linkComponents));
        }
    });

})(React, App);