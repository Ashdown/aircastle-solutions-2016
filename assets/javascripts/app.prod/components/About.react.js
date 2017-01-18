(function(React, App){

    App.Components.About = React.createClass({displayName: "About",
        render: function() {

            var aboutData = this.props.data;

            return(
                React.createElement("div", {className: "about"}, 
                    React.createElement("img", {className: "about-image", 
                    src: aboutData.image.src, 
                    alt: aboutData.image.alt, 
                    height: "120", 
                    width: "120"}), 
                    React.createElement("p", {className: "description"}, aboutData.description)

                )
                );
        }
    });

})(React, App);