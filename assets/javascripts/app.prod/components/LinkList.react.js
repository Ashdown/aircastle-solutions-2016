(function(React, App){
    App.Components.LinkList = React.createClass({displayName: "LinkList",

        checkForFadeIn: function() {
            var pageScrollBottom = helpers.getPageScrollBottom(),
                bottomPositionOfItem =  this.getDOMNode().offsetTop + 32;

            if( pageScrollBottom >= bottomPositionOfItem) {
                this.setState({
                    'visibleClass': ''
                });

            }
        },

        getInitialState: function() {
            return({
                visibleClass: 'invisible'
            });
        },

        componentDidMount: function() {
            window.addEventListener('scroll', this.checkForFadeIn);
        },

        componentWillUnMount: function() {
            window.removeEventListener('scroll', this.checkForFadeIn);
        },

        render: function(){

            var linkData = this.props.data,
                linkComponents = [];

            for(var key in linkData) {
                linkComponents.push(React.createElement(App.Components.LinkItem, {key: key, data: linkData[key]}));
            }

            return(React.createElement("ul", {className: "link-list " + this.state.visibleClass}, linkComponents));
        }
    });

})(React, App);