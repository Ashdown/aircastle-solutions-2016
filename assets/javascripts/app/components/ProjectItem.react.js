(function(react, app, window) {

    var parentList;

    var getScreenType = function() {
        if(window.innerWidth >= 1024) {
            return 'desktop';
        } else if(window.innerWidth >= 640) {
            return 'tablet';
        } else {
            return 'mobile';
        }
    };

    App.Components.ProjectItem = React.createClass({displayName: "ProjectItem",

        getInitialState: function() {
          return({
              detailsToggleClass: 'closed',
              columnClass: '',
              itemStateClass: ''
          });
        },

        propTypes: {
            data: React.PropTypes.object.isRequired
        },

        hoverItem: function() {
            if(this.state.detailsToggleClass === 'closed' ) {
                this.setState({
                    itemStateClass: this.state.itemStateClass === '' ? 'hover' : ''
                });
            }
        },

        toggleDetails: function(event) {
            event.preventDefault();

            var listWidth = parentList.getDOMNode().offsetWidth; //window.innerWidth - 8,
                columnClass = 'column-one';

            switch(getScreenType(window)) {
                case 'mobile':
                    if(this.refs.item.getDOMNode().offsetLeft >= listWidth/2) {
                        columnClass = 'column-two'
                    }
                    break;
                case 'tablet':
                case 'desktop':

                    var columnWidth = listWidth/ 3,
                        offset = this.refs.item.getDOMNode().offsetLeft + 8;

                    if(offset >= columnWidth) {
                        if(offset >= columnWidth * 2) {
                            columnClass = 'column-three'
                        } else {
                            columnClass = 'column-two'
                        }
                    }
                    break;
            }

            this.setState({
                detailsToggleClass: this.state.detailsToggleClass === 'closed' ? 'open' : 'closed',
                columnClass: columnClass,
                itemStateClass: this.state.detailsToggleClass === 'closed' ? 'active' : ''
            });
        },

        render: function() {
            var data = this.props.data;
            parentList = this.props.parentList;

            return(
                <li className={"project-item invisible " + data.type + ' ' + this.state.itemStateClass} ref="item">
                    <div className="container">
                        <a className="details-link" onClick={this.toggleDetails} onMouseEnter={this.hoverItem} onMouseLeave={this.hoverItem} href="#"></a>
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