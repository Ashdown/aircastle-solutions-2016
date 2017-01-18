(function(React, App) {

    var projectGrid;

    App.Components.ProjectList = React.createClass({displayName: "ProjectList",

        removeClass: function(element, classname) {
            var reg = new RegExp('(\\s|^)'+classname+'(\\s|$)');
            element.className = element.className.replace(reg,' ');
        },

        getPageScrollTop: function() {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        },

        getProjectItemOffsetTop: function(projectItem) {
            return (
                projectItem.offsetTop +
                document.getElementsByClassName('project-list')[0].offsetTop -
                projectItem.offsetHeight);
        },

        fadeInVisibleProjects: function() {
            var projectList = React.findDOMNode(this),
                invisibleProjectItems = projectList.getElementsByClassName('invisible'),
                pageScrollTop = this.getPageScrollTop();

            for(var i = 0; i < invisibleProjectItems.length; i++) {
                if(pageScrollTop > this.getProjectItemOffsetTop(invisibleProjectItems[i])) {
                    this.removeClass(invisibleProjectItems[i], 'invisible');
                }
            }

        },

        componentDidMount: function() {
            window.addEventListener('scroll', this.fadeInVisibleProjects);
        },

        componentWillUnMount: function() {
            window.removeEventListener('scroll', this.fadeInVisibleProjects);
        },

        componentDidUpdate: function() {

            if(projectGrid === undefined) {
                projectGrid = new Masonry('.project-list', {
                    itemSelector: '.project-item',
                    transitionDuration: 0
                });
            } else {

                var projectList = React.findDOMNode(this),
                    projectItems = projectList.getElementsByClassName('project-item');

                if(projectGrid.getItemElements().length < projectItems.length) {
                    projectGrid.appended(projectItems[projectItems.length - 1]);
                }
            }
            this.fadeInVisibleProjects();
        },

        render: function() {

            var projectData = this.props.data,
                projectComponents = [],
                projectList = this;

            for(var key in projectData) {
                projectComponents.push(React.createElement(App.Components.ProjectItem, {key: key, data: projectData[key], parentList: projectList}));
            }

            return (React.createElement("ul", {className: "project-list", ref: "project"}, projectComponents));
        }

    });

})(React, App);