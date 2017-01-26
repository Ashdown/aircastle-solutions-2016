(function(React, App, window) {
    App.Components.PopUp = React.createClass({

        update: function(event) {
            this.setState({
                visible: true,
                image: event.detail
            });
        },

        close: function(event) {
            event.preventDefault();
            this.setState({
                visible: false
            });
        },

        getInitialState: function() {
            return({
                visible: false,
                image: {
                    url: '/assets/placeholder.jpg',
                    alt: 'placeholder image',
                    height: '1',
                    width: '1'
                }
            });
        },

        componentWillMount: function() {
            window.addEventListener(App.Constants.PopUpConstants.UPDATE_POP_UP, this.update);
        },

        render: function() {

            var visibleClass = this.state.visible ? 'visible' : 'invisible',
                image = this.state.image;

            return(
                <div onClick={this.close} className={"pop-up " + visibleClass}>
                    <a className="close-link" href="#">
                        <App.Svg.CloseSvg />
                    </a>
                    <div className="image-container">
                        <img className="pop-up-image" src={image.url} alt={image.alt} height={image.height} width={image.width} />
                    </div>
                </div>
            );
        }
    })
})(React, App, window);