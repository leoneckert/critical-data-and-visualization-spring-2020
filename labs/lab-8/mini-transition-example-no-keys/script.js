// data we work with
let data1 = [
  { name: "A",
    value: 1,
  },
  { name: "B",
    value: 2,
  },
  { name: "C",
    value: 3
  }
];
let data2 = [
  { name: "A",
    value: 180,
  },
  { name: "B",
    value: 140,
  },
  { name: "C",
    value: 110,
  },
  { name: "D",
    value: 105
  }
];
let data3 = [
  { name: "A",
    value: 1030,
  },
  { name: "B",
    value: 1720,
  },
  { name: "Z",
    value: 1400
  }
];

let data = data1;

// global variables that we need at various spots:
let w = 900;
let h = 500;
let xpadding = 150;
let ypadding = 80;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;


// X scale & axis
let xDomain = [0, data.length-1]; //this means our scale expects numbers between 0 and... data.length-1 as and input
let xRange = [xpadding, w-xpadding] //... and will return values between xpadding and w-xpadding as an output
let xScale = d3.scaleLinear().domain(xDomain).range(xRange);
let xAxis = d3.axisBottom(xScale);
let xAxisGroup = viz.append("g").attr("class", "xaxis");
xAxisGroup.call(xAxis);
xAxisGroup.attr("transform", "translate(0,"+(h-ypadding)+")");

// Y scale & axis
let yMax = d3.max(data, function(d){
  // this function returns the value inside each datapoint
  // of which we are looking for the maximum across the dataset.
  return d.value;
});
let yScale = d3.scaleLinear().domain([0, yMax]).range([h-ypadding, ypadding]);
let yAxis = d3.axisLeft(yScale);
let yAxisGroup = viz.append("g").attr("class", "yaxis");
yAxisGroup.call(yAxis);
yAxisGroup.attr("transform", "translate("+xpadding/2+", 0)");


// Group for graph
let graphgroup = viz.append("g").attr("class", "graphgroup");

// Bind data
let theSituation = graphgroup.selectAll(".datapoint").data(data);

// Deal with entering data
// create groups for each datapoint and position them
let enteringGroups = theSituation.enter()
  .append("g")
    .attr("class", "datapoint")
    .attr("transform", function(d, i){
      let xPos = xScale(i); //i is the datapoints position in this dataset. our scale expects values between 0 and data.length
      let yPos = yScale(d.value); //our yScale expects the data points value as an input
      return "translate("+xPos+","+yPos+")"
    })
;
// append a circle to each group
enteringGroups
  .append("circle")
    .attr("r", 10)
;
enteringGroups
  .append("text")
    .text(function(d){return d.name})
    .attr("fill", "red")
    .attr("font-size", 35)
    .attr("font-family", "sans-serif")
  ;


function update(newdata){

  data = newdata;
  //the data changed


  //                _                __             _
  //  ___  ___ __ _| | ___  ___     / /   __ ___  _(_)___
  // / __|/ __/ _` | |/ _ \/ __|   / /   / _` \ \/ / / __|
  // \__ \ (_| (_| | |  __/\__ \  / /   | (_| |>  <| \__ \
  // |___/\___\__,_|_|\___||___/ /_/     \__,_/_/\_\_|___/
  //
  //update xscale (not "let" needed here, we just update the details that changed with new data)
  xDomain = [0, data.length-1];
  xScale.domain(xDomain); //here we adjust the scale that already exists (-> no "let" needed)
  // update yaxis
  xAxis = d3.axisBottom(xScale);
  // xAxisGroup.call(xAxis); //finally bring the updated axis onto the page
  xAxisGroup.transition().duration(1000).call(xAxis); // modified above line to transition from old to new axis

  // update yscale
  yMax = d3.max(data, function(d){ return d.value;}); // detailed description above
  yScale.domain([0, yMax]);
  //update yAxis
  yAxis = d3.axisLeft(yScale);
  yAxisGroup.transition().duration(1000).call(yAxis);

  //deal with the graph

  //  _     _           _                             _       _
  // | |__ (_)_ __   __| |  _ __   _____      __   __| | __ _| |_ __ _
  // | '_ \| | '_ \ / _` | | '_ \ / _ \ \ /\ / /  / _` |/ _` | __/ _` |
  // | |_) | | | | | (_| | | | | |  __/\ V  V /  | (_| | (_| | || (_| |
  // |_.__/|_|_| |_|\__,_| |_| |_|\___| \_/\_/    \__,_|\__,_|\__\__,_|
  //
  // bind the new data
  theSituation = graphgroup.selectAll(".datapoint").data(data);
  console.log("theSituation: ", theSituation);


  //             _
  //   ___ _ __ | |_ ___ _ __
  //  / _ \ '_ \| __/ _ \ '__|
  // |  __/ | | | ||  __/ |
  //  \___|_| |_|\__\___|_|
  //
  //deal with INCOMING elements:
  // create groups for incoming
  enteringGroups = theSituation.enter()
    .append("g")
  ;
  //append circle to group
  enteringGroups
    .append("circle")
      .attr("r", 10)
  ;
  enteringGroups
    .append("text")
      .text(function(d){return d.name})
      .attr("fill", "red")
      .attr("font-size", 35)
      .attr("font-family", "sans-serif")
    ;
  //position the group (and animate it)
  enteringGroups.attr("class", "datapoint")

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+",0)";  // position BEFORE transition
    })

    .transition() // transition
    .duration(1000) // transition duration

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+","+yScale(d.value)+")"; // position AFTER transition
    })
  ;

  //
  //            _ _
  //   _____  _(_) |_
  //  / _ \ \/ / | __|
  // |  __/>  <| | |_
  //  \___/_/\_\_|\__|
  //
  // deal with EXITING elements:
  exitingGroups = theSituation.exit();
  //animate exiting elements positions and remove them in the end:
  exitingGroups

    // the element has a certain position on the page aka position BEFORE transition

    .transition() // transition
    .duration(1000) // transition duration

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+","+h+")"; // position AFTER transition
    })
    .remove() // ultimately the group element is removed from the page
  ;



  //                  _       _
  //  _   _ _ __   __| | __ _| |_ ___
  // | | | | '_ \ / _` |/ _` | __/ _ \
  // | |_| | |_) | (_| | (_| | ||  __/
  //  \__,_| .__/ \__,_|\__,_|\__\___|
  //       |_|
  //
  //deal with updating elements:
  theSituation

    .transition() // transition
    .duration(1000) // transition duration

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+","+yScale(d.value)+")"; // position AFTER transition
    })
  ;
  theSituation
    .select("text")
      .text(function(d){return d.name})
      .attr("fill", "red")
      .attr("font-size", 35)
      .attr("font-family", "sans-serif")
    ;

}

document.getElementById("data1button").addEventListener("click", function(){
  update(data1);
});
document.getElementById("data2button").addEventListener("click", function(){
  update(data2);
});
document.getElementById("data3button").addEventListener("click", function(){
  update(data3);
});
