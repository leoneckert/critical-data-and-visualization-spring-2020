let w = 2400;
let h = 800;

function filterFunction(d){
  return d.fame_score > 200;
}

function getName(d, i){
  return d.name;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://gist.github.com/seripap/9eb809268eb8026abd9f

// I am using this array only to quickly get an index for each month
// literally, all i want is to say "March" and get back "2" (because 0 indexed array)
// the reason for this is that my dataset stores months as words.
var monthStrings = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];



let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "black")
;

function gotData(incomingData){


  // this is one way to reduce datapoints
  // there is many other ways to use the filter function
  // in this case i am using the dataset's "fame score"
  // above in this script you can find the filter function
  // reference:
  // JS array methods (including the filter method): https://dev.to/thegamefreak720/how-not-to-be-scared-of-js-array-methods-foreach-map-filter-and-reduce-2c13
  let reducedData = incomingData.filter(filterFunction);

  // IMPORTANT:
  // I am using Javascripts original
  // new Date() method to construct date objects
  // D3s d3.timeParse works just as good
  // references:
  // JS Date Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  // d3.timeParse: https://github.com/d3/d3-time-format#timeParse

  // d3.extent parses the array for the min and max value of a statement you define
  // in my case I am defining this as the an Date Object.
  // in other words, this follwoing 3 lines goes over each datapoint
  // turns year and month into a date object and in the end returns
  // and array with the earliest and latest of these date objects
  // this is done in order to then use it in the scale
  // references:
  // d3.min: https://github.com/d3/d3-array#min
  // d3.max: https://github.com/d3/d3-array#max
  // d3.extent: https://github.com/d3/d3-array#extent
  let minMaxDateArray = d3.extent(incomingData, function(d){

    return new Date(d.death_year, monthStrings.indexOf(d.death_month))
  });
  console.log(minMaxDateArray);


  var xScale = d3.scaleTime()
      .domain(minMaxDateArray)
      .range([0, w]);

  function getXPosition(d, i){
    console.log(d);
    console.log(monthStrings.indexOf(d.death_month));
    let date = new Date(d.death_year, monthStrings.indexOf(d.death_month))
    return xScale(date);
  }

  // I am scaling the death age on the y axis, assuming in this scale
  // that they will lie between 20 and 100 years.
  let yScale = d3.scaleLinear().domain([20,100]).range([0,h]);
  function getYPosition(d, i){
    return yScale(d.age)
  }
  function getGroupTranslation(d, i){
    return "translate(" + getXPosition(d, i) + "," +  getYPosition(d, i) + ")";
  }


  let datagroups = viz.selectAll(".datagroup").data(reducedData).enter()
    .append("g")
    .classed("datagroup", true)
  ;

  let circles = datagroups.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 5)
      .attr("fill", "lightgrey")
  ;
  let names = datagroups.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .text(getName)
      .attr("fill", "blue")
  ;

  datagroups.attr("transform", getGroupTranslation);



}


d3.json("celebrity_deaths.json").then(gotData);
