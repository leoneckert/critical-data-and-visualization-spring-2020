let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

function gotData(incomingData){
  // all the data:
  console.log(incomingData);


}

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
