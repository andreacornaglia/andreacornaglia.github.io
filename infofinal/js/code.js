'use strict'; //helps you find errors in javascript

d3.selectAll('polygon')
   .on("mouseover", function(d){
        var circleUnderMouse = this;
        //Make all polygons except the selected have reduced opacity
        d3.selectAll('polygon').transition().duration(250).style('opacity',function () {
        return (this === circleUnderMouse) ? 1.0 : 0.3;
    });
});

d3.selectAll('polygon')
   .on("mouseout", function(d){
    d3.selectAll('polygon').transition().duration(250).style('opacity',function () {
        return 1.0;
    });
    d3.select("#language").text("");
    d3.select("#number").text("");
    d3.select("#extra").text("");
    
    
});

//this function gets the parameters from the polygons and displays text inside the circle
function showCaption(l,n){
        d3.select("#language").text(l);
        d3.select("#number").text(n);
        d3.select("#extra").text("of the pages");
}

//Animate the graphic when toggling switch 
var percentagebtn;
var pagebtn;

//load variables 
window.onload = function() {
    percentagebtn = document.getElementById("percentagebtn");
    pagebtn = document.getElementById("pagesbtn");
};

function changeToPages(){
    d3.select("#percentage").transition().duration(1000).style('opacity','0');
    d3.select("#pages").transition().duration(1000).style('opacity','1');
    d3.selectAll("lines").transition().duration(1000).style('stroke','#ccc');
    percentagebtn.className = "button_off";
    pagesbtn.className = "button_on";
}

function changeToPer(){
    d3.select("#percentage").transition().duration(1000).style('opacity','1');
    d3.select("#pages").transition().duration(1000).style('opacity','0');
    d3.selectAll("lines").transition().duration(1000).style('stroke','#fff');
    percentagebtn.className = "button_on";
    pagesbtn.className = "button_off";
}
