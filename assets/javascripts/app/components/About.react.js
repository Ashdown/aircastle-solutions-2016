(function(React, App){

    App.Components.About = React.createClass({
        render: function() {

            var aboutData = this.props.data;

            return(
                <div className="about">
                    <p>{aboutData.description}</p>
                    <img className="about-image"
                        src={aboutData.src}
                        alt={aboutData.alt}
                        height={aboutData.height}
                        width={aboutData.width} />
                </div>
                );
        }
    });

})(React, App);