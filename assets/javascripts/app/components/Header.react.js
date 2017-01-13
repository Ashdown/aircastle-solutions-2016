(function (React, App) {

    App.Components.Header = React.createClass({

        render: function(){

            return (
                <header className="header">
                    <h1 className="page-title">Rory Devane</h1>
                    <p className="intro-para">Full Stack Web Developer</p>
                </header>
            )
        }

    });

})(React, App);