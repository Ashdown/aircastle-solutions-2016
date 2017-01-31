(function(React, App, Masonry) {

    var projectGrid,
        updateGridTimeout;

    App.Components.ProjectList = React.createClass({displayName: "ProjectList",

        getInitialState: function(){
            return({
                locked: false
            });
        },

        lock: function() {
            this.setState({locked: true});
        },

        unlock: function() {
            this.setState({locked: false});
        },

        componentDidUpdate: function() {

            var layoutCompleteEvent = new Event('gridReady'),
                projectList = React.findDOMNode(this);

            if(projectGrid === undefined) {

                projectGrid = new Masonry('.project-list', {
                    itemSelector: '.project-item',
                    transitionDuration: 0
                });

                projectGrid.on('layoutComplete', function() {
                    projectList.dispatchEvent(layoutCompleteEvent);
                });

            } else {

                var projectItems = projectList.getElementsByClassName('project-item');

                if(projectGrid.getItemElements().length < projectItems.length) {

                    projectGrid.appended(projectItems[projectItems.length - 1]);

                }
                projectGrid.layout();
            }

        },

        componentDidMount: function() {
            this.getDOMNode().addEventListener('imageLoaded', function() {
                projectGrid.layout();
            });
        },

        componentWillUnMount: function() {
            this.getDOMNode().removeEventListener('imageLoaded', function() {
                projectGrid.layout();
            });
        },

        render: function() {

            var projectData = this.props.data,
                projectList = this,
                projectComponents = [];

            for(var key in projectData) {
                projectComponents.push(React.createElement(App.Components.ProjectItem, {key: key, data: projectData[key], parentList: projectList}));
            }

            return (React.createElement("ul", {className: "project-list", ref: "project"}, projectComponents));
        }

    });

})(React, App, Masonry);