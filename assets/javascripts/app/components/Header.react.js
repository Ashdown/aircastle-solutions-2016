(function (React, App) {

    App.Components.Header = React.createClass({

        render: function () {

            return (
                <header className="header">
                    <h1 className="page-title">Rory Devane</h1>
                    <p className="description-para">Full Stack Web Developer</p>
                    <p className="intro-para">
                    Hi, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                </header>
                )
        }

    });

})(React, App);