(function(React, App){

    App.Svg.MenuSvg = React.createClass({displayName: "MenuSvg",
        render: function() {

            return(

                React.createElement("svg", {className: "menu-svg " + this.props.menuToggleClass, x: "0px", y: "0px", width: "32px", height: "28px", viewBox: "0 0 32 28"}, 

                    React.createElement("g", {transform: "matrix( 1, 0, 0, 1, 0,0) "}, 
                        React.createElement("path", {className: "path", stroke: "#333333", strokeW: true, idth: "4", "stroke-linejoin": "round", strokeLFinecap: "square", fill: "none", d: 
                                        "M 2 2" + ' ' +
                                        "L 30 2" + ' ' +
                                        "M 2 14" + ' ' +
                                        "L 30 14" + ' ' +
                                        "M 30 26" + ' ' +
                                        "L 2 26"})
                    )
                )
                );
        }
    });

})(React, App);