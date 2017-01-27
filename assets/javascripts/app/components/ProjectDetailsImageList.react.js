(function(App, React) {
    App.Components.ProjectDetailsImageList = React.createClass({

        showImage: function(event) {

            event.preventDefault();

            var popupEvent = new CustomEvent(App.Constants.PopUpConstants.UPDATE_POP_UP, {detail: this.props.data[0]});
            window.dispatchEvent(popupEvent);

        },

        render: function(){

            var imageItems = [];

            for(var key in this.props.data) {
                imageItems.push(
                    <li>
                        <a href="#" onClick={this.showImage}>
                            <App.Components.ProjectImage data={this.props.data[0]} extraClass="details-image" parentList={this.props.parentList} />
                        </a>
                    </li>
                );
            }

            return(
                <ul className="project-details-image-list">{imageItems}</ul>
            );
        }

    });
})(App, React)