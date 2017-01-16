(function(react, app) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        getInitialState: function() {
          return({
              detailsToggleClass: 'closed'
          });
        },

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        toggleDetails: function(event) {
            event.preventDefault();
            this.setState({
                detailsToggleClass: this.state.detailsToggleClass === 'closed' ? 'open' : 'closed'
            });
        },

        render: function() {
            var data = this.props.data;



            return(
                <li className={"project-item invisible " + data.type}>
                    <div className="container">
                        <a className="details-link" onClick={this.toggleDetails} href="#"></a>
                        <App.Components.ProjectDetails data={data} toggleClass={this.state.detailsToggleClass}  toggleFunction={this.toggleDetails}/>

                        <div className="image-container">
                            <img className="image" src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />
                        </div>
                        <App.Components.KeywordContainer data={data} />

                    </div>
                </li>
                );
        }
    })

})(React, App);