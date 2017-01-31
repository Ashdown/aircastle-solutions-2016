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

    App.Components.ProjectDetails = React.createClass({

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
                links.push(<App.Components.ProjectLinkItem key={key} text={data.links[key].text} url={data.links[key].url} />)
            }

            return(
                <div className={"project-details " + this.state.toggleClass + ' ' + this.props.columnClass}>
                    <div className="details-container">
                        <h2 className="project-title">{clean(data.title)}</h2>
                        <a className="close-link" href="#" onClick={this.props.toggleFunction}>
                            <App.Svg.CloseSvg />
                        </a>
                        <App.Components.KeywordContainer data={data} />
                        <App.Components.ProjectDetailsImageList data={data.images} parentList={this.props.parentList} ref="imageList"/>

                        <p className="dates">
                            <span className="start-date">{monthNames[data.start.getMonth()] + ', ' + data.start.getFullYear()}</span>
                            <span className="end-date"> → {monthNames[data.end.getMonth()] + ', ' + data.end.getFullYear()}</span>
                        </p>
                        <p className="description sub-item">{breakLine(data.description)}</p>
                        <ul className="project-link-list">{links}</ul>
                    </div>

                </div>
                );
        }
    });

})(App, React, jQuery);