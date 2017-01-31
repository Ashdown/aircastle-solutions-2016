(function(React, App, helpers){

    App.Components.About = React.createClass({

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

        render: function() {

            var aboutData = this.props.data;

            return(
                <div className={"about " + this.state.visibleClass}>
                    <img className="about-image"
                    src={aboutData.image.src}
                    alt={aboutData.image.alt}
                    height="120"
                    width="120" />
                    <p className="description">{aboutData.description}</p>

                </div>
                );
        }
    });

})(React, App, window.helpers);