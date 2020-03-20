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

  // filter the data:
  function filterFunction(datapoint){
    if(datapoint.Code == "USA" || datapoint.Code == "CHN"){
      return true; //if the filter function returns true, the data point will be accepted
    }else{
      return false; // if the filter function returns false, the data point will be filtered out
    }
  }
  let filteredData = incomingData.filter(filterFunction);
  console.log(filteredData);


  // the "timestamp" of each data point looks like this:
  // Year: "2006"
  // next we create a function that allows us to easily turn this into
  // a javascript date object
  // to do this we use a d3 method which returns a function. it's exactly
  // like what happened when we work with scales: we us a d3 method which
  // then returns a function that we can use as many time as we want. when creating
  // it, we specify how it should behave:
  let yearToDateObjectConverter = d3.timeParse("%Y");
  // that's it, we asked d3 to create a function for us to which we can
  // supply a year in this format: "2007" and it creates a JavaScript Date Object
  // for us. We specified this by using the "%Y" when we create the function. Look for
  // more such key letters here: https://github.com/d3/d3-time-format#locale_format
  // to give one more example, if the time in out data points would look like "2006/07",
  // we could convert it woth the forumulat "%Y/%m"
  // Let's test it:
  let test = yearToDateObjectConverter("2007");
  // check your console:
  console.log(test);
  console.log(typeof(test));
  // date objects in JS always look the same and always describe a precise point in time.
  // to do that, they work with some default. E.g. when we only supply a year to build
  // a date object from (like above), it will default to January 1st, 00:00am.
  // That seems reasonable, right?
  // if we only supply a time, let's try it, why not:
  let makeDateObjectFromTime = d3.timeParse("%H:%M");
  let testtest = makeDateObjectFromTime("13:01");
  // check your console:
  console.log(testtest);
  // you see it? now the date defaults to 1900/01/01.
  // note that the last lines of code where just for our testing, we don't need them in this project.


  // generally, time is a tricky thing to talk about witha computer -- because we
  // express it on so many diferent scales ans systems all at once!
  //         (24h a day, 7 days a week, 60 seconds, 24 hours, soo, after, just before, ...)
  // to avoice misunderstanding, it's a good idea to bring anything that talk about time inside our datapoitns
  // into a formate the browser likes early on (right after the data is loaded). that way, we dont; get into
  // a mess later on.
  // we can use the .map method in this situation -- its perfect when we want to make a small adjustment to
  // one feeature inside each element inside an array:
  function mappingFunction(datapoint){
    datapoint.Year = yearToDateObjectConverter(datapoint.Year);
    return datapoint
  }
  let filteredAndTimeAdjustedData = filteredData.map(mappingFunction);
  // check your console:
  console.log(filteredAndTimeAdjustedData);







  // next we can create an x scale. we want the x axis to sretch all the way from
  // the first year (min) of HIV measurement in our data set to the most recent (max) one.
  // then we want this information in this format:
  // [first-year-of-measurement, most-recent-year-of-measurement]
  // in order to define it as our x Scales input Domain.
  // d3 gives us useful methods to do this:
  // We can get the minimum/maximum value of any key in any array of objects or values. It doesn't
  // matter how complex our data is structured because we can tell d3 precisely
  // where to look for the value of which we want to know the minimum/maximum.
  // take a look:
  let minYear = d3.min(filteredAndTimeAdjustedData, function(d){
    //IMPORTANT: whatever we return will be the value of which d3 will
    // look for the minimum. Ultimately it returns the ONE minimum value of all data points.
    return d.Year;
  });
  // Let's see what we got:
  console.log(minYear);
  // this returns this Date object:
  // Mon Jan 01 1990 00:00:00 GMT+0800 (China Standard Time)
  // 1990! looks good!
  // the maximum
  let maxYear = d3.max(filteredAndTimeAdjustedData, function(d){
    return d.Year;
  });
  // the only thing that changed is the word "max"
  console.log(maxYear);
  // Sun Jan 01 2017 00:00:00 GMT+0800 (China Standard Time)
  // 2017! Great, now we can put them into a domain array that we supply to constructing the xScale
  let xDomain = [minYear, maxYear];
  // this will work perfectly well. But because it is needed so often
  // and requires the same code with only one word changed (min->max),
  // there is an even better method that directly returns min AND max in an array:
  let alternativeXDomain = d3.extent(filteredAndTimeAdjustedData, function(d){
    return d.Year;
  })
  // check it out
  console.log(alternativeXDomain);
  // [Mon Jan 01 1990 00:00:00 GMT+0800 (China Standard Time), Sun Jan 01 2017 00:00:00 GMT+0800 (China Standard Time)]
  // You see? the exact same, just much shorter!
  // so right now the variables xDomain and alternativeXDomain have the exact same value.
  // the only difference is that we create alternativeXDomain much smarter.
  // X scale (as learned in week4's Lab)
  let xPadding = 50;
  // reference: https://github.com/d3/d3-scale#time-scales
  let xScale = d3.scaleTime().domain(alternativeXDomain).range([xPadding, w-(xPadding*2)]);
  console.log(xScale(yearToDateObjectConverter("2004")))
  // Next, let's draw an x axis. This is new for us, but luckily D3 makes it incredibly
  // easy.
  // reference: https://github.com/d3/d3-axis
  // All an axis realy needs is to know our scale
  var xAxis = d3.axisBottom(xScale);
  // d3 works with the default svg shapes, an axis is put together of many of them.
  // it makes A LOT of sense to group all these elements in a group
  let xAxisGroup = viz.append("g").attr("class", "xaxis");
  // then we tell D3 to construct an axis in this group:
  xAxisGroup.call(xAxis);
  // take a look, do you see the axis at the top of your svg?
  // looks good no? The "Bottom" in "d3.axisBottom(xScale);" refers to the side on which
  // the axis text appear, not where the axis as a whole is located,
  // we have to take care of that ourselves:
  let xAxisYPos = h - 30;
  xAxisGroup.attr("transform", "translate(0,"+xAxisYPos+")");
  // excuse me please, but this. looks. mesmerizing.


  // y scale and axis
  // let's do the same on the y axis, for the value of the:
  // "Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)"
  // -key. What an annoyingly long key. If you are confused look at the datapoints
  // we console.logged above. Let's save the key in a variable to make it less annoying:
  let valueKey = "Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)";

  // Now let's do it, but faster than above!
  // y Scale:
  let topPadding = 30;
  let yScale = d3.scaleLinear().domain(d3.extent(filteredAndTimeAdjustedData, function(d){return d[valueKey]})).range([xAxisYPos, topPadding]);
  // Wow, please consider this one carfully. We get the min max extent right in place.
  // we access the values NOT WITH A DOT NOTATATION like d.Year!!!!!! This is confusing, but
  // extremely IMPORTANT to know. We use our string (variable) in []-brackets instead.
  // then, our range: we want the lowest value to be scaled to the pixel where our X AXIS starts
  // so we use the xAxisYPos for the min of the range, and a little padding for the top.

  // next, axis:
  var yAxis = d3.axisLeft(yScale);
  let yAxisgroup = viz.append("g").attr("class", "yaxis").call(yAxis);
  yAxisgroup.attr("transform", "translate("+xPadding+",0)");

  // now that was quick. six lines of code?? Oh my, this is so neat.


  // now let's plot
  // to keep things seperated let's make a group for all shapes:
  let vizGroup = viz.append("g").attr("class", "vizgroup");

  // bind data and create groups for each datapoint:
  let dataGroups = vizGroup.selectAll(".datagroup").data(filteredAndTimeAdjustedData).enter()
      .append("g")
      .attr("class", "datagroup")
  ;


  // OPTION 1 circles

  // append circles to the groups

  // let circles = dataGroups.append("circle")
  //     .attr("cx", 0)
  //     .attr("cy", 0)
  //     .attr("r", 5)
  // ;



  // OPTION 2 graphics
  // i don't want circles
  // note the variable at the bottom of this fil6
  // it's svg code exported from Adobe Illustrator
  // in AI:
  // export as > svg.
  // select: styling: inline


  let shapes = dataGroups.append("g").attr("class", "customSvgGroup").html(svgShape).attr("transform", "scale(0.4) translate(0, -80)");


  // translate function in which we are using our scales
  function getTranslate(d, i){
    let date = d.Year;
    let value = d[valueKey];
    return "translate("+xScale(date)+","+yScale(value)+")";
  }
  // translate the position of each group:
  dataGroups.attr("transform", getTranslate);
  // this looks great, compare it with this graph from the website we got our data from:
  // https://ourworldindata.org/grapher/new-cases-of-hiv-infection?tab=chart&time=1990..2017&country=CHN


  // what next?


  // try changing the country Code in our filer function. E.g. to USA
  // Everything will automatically adjust to the new data. See the y Axis changing?

  // next we could adjust our filter to "let in" data from another country.
  //  (datapoint.Code == "USA" || datapoint.Code == "CHN")
  // then leave all code as it is, but color each circle depending on its Code value
  // that way each country would have its own color. Try it!

}

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);




let svgShape = `<polygon points="30.43 0 0 54.78 54.78 121.73 103.47 99.42 51.74 50.72 103.47 36.52 83.19 12.17 30.43 0" style="fill: #231f20"/>
<polygon points="91.13 56.42 82.47 69.59 111.82 98.56 107.68 107.22 72.31 121.73 101.66 126.78 125.37 107.59 135.9 15.03 117.84 6.75 96.02 18.42 112.2 38.36 86.61 46.64 91.13 56.42" style="fill: #231f20"/>
<polygon points="60.91 52.24 72.31 64.74 84.01 58.49 79.47 45.42 60.91 52.24" style="fill: #231f20"/>
<path d="M7.93,103.35c13.64,3.08,33.93,3.08,43.81-2.2S67.43,93.59,68,80s1.43-41.35,4.36-51.47,33.74-21.8,33.74-21.8" style="fill: none;stroke: #e13366;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 4px"/>`
