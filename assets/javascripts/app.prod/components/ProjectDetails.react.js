(function (App, React, $) {

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function clean(text) {
        return text.replace(/&#8217;/, "'");
    }

    function breakLine(text) {
        var regex = /(<br\/>)/g;

        return text.split(regex).map(function (line) {
            return line.match(regex) ? React.createElement('br') : line;
        });
    }

    App.Components.ProjectDetails = React.createClass({displayName: "ProjectDetails",

        show: function () {

            //create the carousel

            if(this.props.data.images.length > 0) {

                $(this.refs.imageList.getDOMNode()).slick({
                    infinite: false,
                    variableWidth: true,
                    mobileFirst: true,
                    prevArrow: '<a class="previous-link" href="#"></a>',
                    nextArrow: '<a class="next-link" href="#"></a>'
                });
            }

            this.setState({
                toggleClass: 'open'
            });
        },

        hide: function () {

            $(this.refs.imageList.getDOMNode()).slick('unslick');

            this.setState({
                toggleClass: 'hidden'
            });
        },

        getInitialState: function () {
            return({
                toggleClass: 'closed'
            });
        },

        render: function () {

            var data = this.props.data;

            var links = [];

            for (var key in data.links) {
                links.push(React.createElement(App.Components.ProjectLinkItem, {key: key, text: data.links[key].text, url: data.links[key].url}))
            }

            return(
                React.createElement("div", {className: "project-details " + this.state.toggleClass + ' ' + this.props.columnClass}, 
                    React.createElement("div", {className: "details-container"}, 
                        React.createElement("h2", {className: "project-title"}, clean(data.title)), 
                        React.createElement("a", {className: "close-link", href: "#", onClick: this.props.toggleFunction}, 
                            React.createElement(App.Svg.CloseSvg, null)
                        ), 
                        React.createElement(App.Components.KeywordContainer, {data: data}), 
                        React.createElement(App.Components.ProjectDetailsImageList, {data: data.images, parentList: this.props.parentList, ref: "imageList"}), 

                        React.createElement("p", {className: "dates"}, 
                            React.createElement("span", {className: "start-date"}, monthNames[data.start.getMonth()] + ', ' + data.start.getFullYear()), 
                            React.createElement("span", {className: "end-date"}, " → ", monthNames[data.end.getMonth()] + ', ' + data.end.getFullYear())
                        ), 
                        React.createElement("p", {className: "description sub-item"}, breakLine(data.description)), 
                        React.createElement("ul", {className: "project-link-list"}, links)
                    )

                )
                );
        }
    });

})(App, React, jQuery);