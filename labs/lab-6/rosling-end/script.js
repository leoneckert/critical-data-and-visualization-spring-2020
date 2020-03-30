console.log("hi");
//data from https://towardsdatascience.com/how-to-build-animated-charts-like-hans-rosling-doing-it-all-in-r-570efc6ba382
// First stop is on gapminder.com to download the 3 data sets needed. This foundation was created by the Rosling family. It has fantastic visualizations and data sets that everyone should check to “fight ignorance with a fact-based worldview that everyone can understand”.
// We will download 3 excel files (xlsx):
// Children per woman (total fertility)
// Population, total
// Life expectancy (years)
// Once the file are downloaded and saved in your working folder, it’s time to clean and merge the data sets.

// on nesting
// http://learnjsdata.com/group_data.html

let w = 1200;
let h = 800;
let xPadding = 50;
let yPadding = 50;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

function cleanData(dataToTransform){
  console.log("dataToTransform");

  let yearToDateObjectConverter = d3.timeParse("%Y");
  let newData = dataToTransform.map(function(d, i){
    // // fix date,
    // d.variable = yearToDateObjectConverter(d.variable);
    // // fix flaots
    d.life = parseFloat(d.life);
    d.fert = parseFloat(d.fert);
    d.pop = parseFloat(d.pop);
    return d
  })


  return newData
}

function gotData(incomingData){
  console.log(incomingData);

  //clean data

  let cleanedData = cleanData(incomingData);

  // min max fertility rate
  let fertExtent = d3.extent(cleanedData, function(d, i){
    return d.fert;
  });
  console.log("fertExtent", fertExtent);


  let xScale = d3.scaleLinear().domain(fertExtent).range([xPadding, w-xPadding]);
  let xAxisGroup = viz.append("g").attr("class", 'xaxis');
  let xAxis = d3.axisBottom(xScale);
  xAxisGroup.call(xAxis)
  xAxisGroup.attr("transform", "translate(0, "+ (h-yPadding) +")")
  xAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "black")
    .text("fertility")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;

  // min max lif expectancy
  let lifeExtent = d3.extent(cleanedData, function(d, i){
    return d.life;
  });
  console.log("lifeExtent", lifeExtent);
  let yScale = d3.scaleLinear().domain(lifeExtent).range([h-yPadding, yPadding]);
  let yAxisGroup = viz.append("g").attr("class", 'yaxis');
  let yAxis = d3.axisLeft(yScale);
  yAxisGroup.call(yAxis)
  yAxisGroup.attr("transform", "translate("+xPadding+", 0)")

  yAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate(-33, "+h/2+") rotate(-90)")
    .append("text")
    .attr("fill", "black")
    .text("life expectancy")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;


  // min max Population
  let popExtent = d3.extent(cleanedData, function(d, i){
    return d.pop;
  });
  console.log("popExtent", popExtent);

  let rScale = d3.scaleLinear().domain(popExtent).range([5, 50]);




  //array of times

  // let firstCountry = cleanedData[0];
  // let firstCountryRecords = firstCountry.values;
  // console.log(firstCountryRecords);
  // let dates = firstCountryRecords.map(function(d){
  //   return d.variable
  // });
  let dates = cleanedData.reduce(function(acc,d,i){
    if(!acc.includes(d.variable)){
      acc.push(d.variable)
    }
    return acc
  }, [])

  console.log(dates);
  // we dont have to sort but could google how if we had to (https://gist.github.com/onpubcom/1772996)
  // console.log(dates);

  let currentYearIndex = 0;
  let currentYear = dates[currentYearIndex];

  function filterYear(d, i){
    if(d.variable == currentYear){
      return true;
    }else{
      return false;
    }
  }

  let year = viz.append("text")
      .text("")
      .attr("x", 100)
      .attr("y", h-100)
      .attr("font-family", "sans-serif")
      .attr("font-size", "2.7em")

  ;
  let vizGroup = viz.append("g").attr("class", "vizGroup");

  function drawViz(){
    let currentYearData = cleanedData.filter(filterYear);
    console.log("currentYearData", currentYearData);


    function assignKey(d, i){
      return d.Country
    }

    let existingElements = vizGroup.selectAll(".datagroup").data(currentYearData, assignKey);

    let enteringElements = existingElements.enter()
      .append('g')
        .attr('class', 'datagroup')
    ;

    function getRadius(d, i){
      return rScale(d.pop);
    }
    function getFill(d, i){
      if(d.continent == "Asia"){
        return "red";
      }else if(d.continent == "Europe"){
        return "blue";
      }else if(d.continent == "Africa"){
        return "green";
      }else if(d.continent == "Americas"){
        return "lightgreen";
      }else if(d.continent == "Oceania"){
        return "yellow";
      }
    }
    enteringElements.append("circle")
      .attr("r", getRadius)
      .attr("fill", getFill)
    ;


    enteringElements.append("text")
      .text(function(d, i){
        return d.Country
      })
      .attr('fill', "green")
      .attr("font-family", "sans-serif")
      .attr("font-size", "0.7em")
    ;

    function getGroupPosition(d, i){
      let x = xScale( d.fert );
      let y = yScale( d.life );
      return "translate("+x+", "+y+")";

    };

    enteringElements.attr("transform", getGroupPosition);

    existingElements.select("circle")
      .attr("r", getRadius)
    ;
    existingElements.transition().duration(2000).ease(d3.easeLinear).attr("transform", getGroupPosition);
  }

  // this loosk messy. It makes sure data is shown AND moving from the very first moment
  currentYear = dates[currentYearIndex];
  year.text(currentYear)
  drawViz();
  currentYearIndex++;
  currentYear = dates[currentYearIndex];
  year.text(currentYear-1) // this is a design choice, point are always moving, this way the year show is the year they "depart from" rather than the one the move towards
  drawViz();

  setInterval(function(){

    currentYearIndex++;
    if(currentYearIndex>dates.length){
      currentYearIndex = 0;
    }

    currentYear = dates[currentYearIndex];
    year.text(currentYear-1) // this is a design choice, point are always moving, this way the year show is the year they "depart from" rather than the one the move towards

    drawViz();

  }, 2000);


}



d3.csv("data.csv").then(gotData);
