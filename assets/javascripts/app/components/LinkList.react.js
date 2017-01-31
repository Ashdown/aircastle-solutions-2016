(function(React, App){
    App.Components.LinkList = React.createClass({

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
                linkComponents.push(<App.Components.LinkItem key={key} data={linkData[key]} />);
            }

            return(<ul className={"link-list " + this.state.visibleClass}>{linkComponents}</ul>);
        }
    });

})(React, App);