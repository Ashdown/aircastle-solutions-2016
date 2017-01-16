(function(React, App){

    App.Components.About = React.createClass({
        render: function() {

            var aboutData = this.props.data;

            return(
                <div className="about">
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

})(React, App);