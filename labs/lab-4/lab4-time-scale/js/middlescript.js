let w = 2400;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lightpink")
;

function gotData(incomingData){
  console.log(incomingData);





}


d3.json("celebrity_deaths.json").then(gotData);
