(function(App, React) {
    App.Components.ProjectDetailsImageList = React.createClass({displayName: "ProjectDetailsImageList",

        render: function(){

            var imageItems = [];

            for(var key in this.props.data) {

                imageItems.push(
                    React.createElement(App.Components.ProjectDetailsImageItem, {
                        data: this.props.data[key], 
                        parentList: this.props.parentList, 
                        loadImage: this.props.detailsOpened})
                );
            }

            return(
                React.createElement("ul", {className: "project-details-image-list"}, imageItems)
            );
        }

    });
})(App, React)