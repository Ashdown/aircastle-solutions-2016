(function(App, React, window) {
    App.Components.ProjectDetailsImageItem = React.createClass({

        showImage: function(event) {

            event.preventDefault();

            var popupEvent = new CustomEvent(App.Constants.PopUpConstants.UPDATE_POP_UP, {detail: this.props.data});
            window.dispatchEvent(popupEvent);

        },

        render: function() {


            var imageState = this.props.loadImage ? 'load' : 'lazy';

            return(
                <li>
                    <a href="#" onClick={this.showImage}>
                        <App.Components.ProjectImage
                            data={this.props.data}
                            extraClass="details-image"
                            parentList={this.props.parentList}
                            imageState={imageState} />
                    </a>
                </li>
                );
        }
    })
})(App, React, window);