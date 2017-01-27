(function(App, React) {
    App.Components.ProjectDetailsImageList = React.createClass({

        render: function(){

            var imageItems = [];

            for(var key in this.props.data) {

                imageItems.push(
                    <App.Components.ProjectDetailsImageItem data={this.props.data[key]} parentList={this.props.parentList} />
                );
            }

            return(
                <ul className="project-details-image-list">{imageItems}</ul>
            );
        }

    });
})(App, React)