let w = 1400;
let h = 500;
let padding = 25;



let viz = d3.select("#visualization")
    .append("svg")
  .style("background-color", "lavender")
  .attr("width", w)
  .attr("height", h)
;



// initialise scales
let xScale = d3.scaleTime().range([padding, w-padding]);



d3.json("data.json").then(function(incomingData){
  console.log(incomingData);

  incomingData = incomingData.slice(0,100);

  //turn date in to data object
  incomingData = incomingData.map(d=>{
    d.date = new Date(d.parsedDate)
    return d
  })
  // get the earliest and latest date in the dataset
  let extent = d3.extent(incomingData, function(d){
    return d.date;
  })
  console.log(extent);
  // amend domain to scale
  xScale.domain(extent);
  // group to hold axis
  let xAxisGroup = viz.append("g").attr("class", "xaxisgroup");
  // ask d3 to get an axis ready
  let xAxis = d3.axisBottom(xScale);
  // build the axis into our group
  xAxisGroup.call(xAxis);


  // put a circle for each data point onto the page

  viz.selectAll(".datapoint").data(incomingData).enter()
    .append("circle")
    .attr("class", "datapoint")
    .attr("cx", function(d){
      return xScale(d.date);
    })
    .attr("cy", function(d){
      return h/2;
    })
    .attr("r", 4)
  ;

  // problem: points overlap!




})
