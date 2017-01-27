(function(react, app, window, helpers) {

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
              itemStateClass: '',
              visibleClass: 'invisible'
          });
        },

        propTypes: {
            data: React.PropTypes.object.isRequired,
            parentList: React.PropTypes.object.isRequired
        },

        checkForFadeIn: function() {

            var pageScrollBottom = helpers.getPageScrollBottom(),
                bottomPositionOfItem =  this.refs.item.getDOMNode().offsetTop + 16 + this.props.parentList.getDOMNode().offsetTop;

            if( pageScrollBottom >= bottomPositionOfItem) {
                this.setState({
                    'visibleClass': ''
                });

            }
        },

        hoverItem: function() {
            if(this.state.detailsToggleClass === 'closed' ) {
                this.setState({
                    itemStateClass: this.state.itemStateClass === '' ? 'hover' : ''
                });
            }
        },

        getColumnClass: function() {
            var listWidth = parentList.getDOMNode().offsetWidth; //window.innerWidth - 8,
            var columnClass = 'column-one';

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

            return columnClass;
        },

        showDetails: function(event) {

            event.preventDefault();

            if(this.props.parentList.state.locked === false) {
                this.refs.projectDetails.show();
                this.props.parentList.lock();

                this.setState({
                    detailsToggleClass: 'open',
                    columnClass: this.getColumnClass(),
                    itemStateClass:'active'
                });
            }
        },

        hideDetails: function(event) {

            event.preventDefault();

            if(this.props.parentList.state.locked === true) {
                this.props.parentList.unlock();
                this.refs.projectDetails.hide();

                this.setState({
                    detailsToggleClass: 'closed',
                    itemStateClass: ''
                });

            }
        },

        getFilteredClass: function() {
          if (this.props.data.matchesFilter) {
              return '';
          } else {
              return 'hidden';
          }
        },

        componentDidMount: function() {
            window.addEventListener('scroll', this.checkForFadeIn);
            this.props.parentList.getDOMNode().addEventListener('gridReady', this.checkForFadeIn);
        },

        componentWillUnMount: function() {
            window.removeEventListener('scroll', this.checkForFadeIn);
            this.props.parentList.getDOMNode().removeEventListener('gridReady', this.checkForFadeIn);
        },

        render: function() {
            var data = this.props.data;
            parentList = this.props.parentList;

            return(
                <li className={"project-item " + this.state.visibleClass + " " + data.type + ' ' + this.state.itemStateClass + this.getFilteredClass()} ref="item">
                    <div className="container">
                        <a className="details-link"
                            onClick={this.showDetails}
                            onMouseEnter={this.hoverItem}
                            onMouseLeave={this.hoverItem}
                            href="#">
                        </a>
                        <App.Components.ProjectDetails
                            data={data}
                            toggleClass={this.state.detailsToggleClass}
                            toggleFunction={this.hideDetails}
                            columnClass={this.state.columnClass}
                            parentList={parentList}
                            ref="projectDetails" />

                        <div className="image-container">
                            <App.Components.ProjectImage data={data.images[0]} extraClass="image" parentList={parentList} />
                        </div>
                        <App.Components.KeywordContainer data={data} />

                    </div>
                </li>
                );
        }
    })

})(React, App, window, helpers);