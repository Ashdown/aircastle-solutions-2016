(function(react, app, window) {

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        getInitialState: function() {
          return({
              detailsToggleClass: 'closed',
              columnClass: ''
          });
        },

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        toggleDetails: function(event) {
            event.preventDefault();

            var listWidth = window.innerWidth - 8,
                columnClass = 'column-one';

            if(this.refs.item.getDOMNode().offsetLeft >= listWidth/2) {
                columnClass = 'column-two'
            }

            this.setState({
                detailsToggleClass: this.state.detailsToggleClass === 'closed' ? 'open' : 'closed',
                columnClass: columnClass
            });
        },

        render: function() {
            var data = this.props.data;

            return(
                <li className={"project-item invisible " + data.type} ref="item">
                    <div className="container">
                        <a className="details-link" onClick={this.toggleDetails} href="#"></a>
                        <App.Components.ProjectDetails
                            data={data}
                            toggleClass={this.state.detailsToggleClass}
                            toggleFunction={this.toggleDetails}
                            columnClass={this.state.columnClass} />

                        <div className="image-container">
                            <img className="image" src={data.image.src} alt={data.image.alt} height={data.image.height} width={data.image.width} />
                        </div>
                        <App.Components.KeywordContainer data={data} />

                    </div>
                </li>
                );
        }
    })

})(React, App, window);