// heavily commented version of what we did in class today

// find instructions on how to do this here:
// https://github.com/leoneckert/critical-data-and-visualization-spring-2020/tree/master/labs/collect-data-google-form

let data = [
    {
        "timestamp": "2019-09-03T14:44:28.271Z",
        "milkTea": 3,
        "ramen": 7,
        "spaghettiBolognese": 5,
        "mango": 2
    },
    {
        "timestamp": "2019-09-03T14:44:36.101Z",
        "milkTea": 2,
        "ramen": 2,
        "spaghettiBolognese": 8,
        "mango": 4
    },
    {
        "timestamp": "2019-09-03T14:45:10.480Z",
        "milkTea": 2,
        "ramen": 3,
        "spaghettiBolognese": 4,
        "mango": 1
    },
    {
        "timestamp": "2019-09-04T05:48:07.519Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 7,
        "mango": 10,
        "dumpling": 8
    },
    {
        "timestamp": "2019-09-04T05:48:11.427Z",
        "milkTea": 7,
        "ramen": 5,
        "spaghettiBolognese": 6,
        "mango": 1,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:48:11.509Z",
        "milkTea": 7,
        "ramen": 9,
        "spaghettiBolognese": 10,
        "mango": 1,
        "dumpling": 8
    },
    {
        "timestamp": "2019-09-04T05:48:15.178Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 4,
        "mango": 10,
        "dumpling": 10
    },
    {
        "timestamp": "2019-09-04T05:48:19.690Z",
        "milkTea": 5,
        "ramen": 10,
        "spaghettiBolognese": 8,
        "mango": 8,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:48:23.595Z",
        "milkTea": 1,
        "ramen": 10,
        "spaghettiBolognese": 10,
        "mango": 10,
        "dumpling": 5
    },
    {
        "timestamp": "2019-09-04T05:48:32.244Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 9,
        "mango": 1,
        "dumpling": 8
    },
    {
        "timestamp": "2019-09-04T05:48:35.279Z",
        "milkTea": 10,
        "ramen": 9,
        "spaghettiBolognese": 8,
        "mango": 10,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:48:36.009Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 9,
        "mango": 10,
        "dumpling": 9
    },
    {
        "timestamp": "2019-09-04T05:48:40.293Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 10,
        "mango": 10,
        "dumpling": 10
    },
    {
        "timestamp": "2019-09-04T05:48:40.671Z",
        "milkTea": 8,
        "ramen": 8,
        "spaghettiBolognese": 7,
        "mango": 9,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:49:14.027Z",
        "milkTea": 1,
        "ramen": 10,
        "spaghettiBolognese": 1,
        "mango": 10,
        "dumpling": 1
    }
]

// A function Leon wrote to transform the structure of the data
// The function with many comments on description of what kind of
// data it transform into what other kind of data is here:
// https://github.com/leoneckert/critical-data-and-visualization-spring-2020/tree/master/labs/lab1#transform-data

function averageData(data){
  let newData = [];
  let keys = Object.keys(data[ data.length-1 ]);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      if(key in datum){
        sum += datum[key];
        num++;
      }
    }
    let avg = sum/num;
    if(!isNaN(avg)){
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      newData.push(newDataPoint);
    }
  }
  return newData;
}

// here we use the function to transform the data
let transformedData = averageData(data);


// log things to the console as you go to make sure things
// are behaving as intended. I see the data looks good
console.log(transformedData);

// Loop over the data, once for each datapoint.
// in our case the loop loops 5 times because we have
// 5 foods in out dataset.
for(let i = 0; i < transformedData.length; i++){
  // get the item we deal with at this iteration
  let datapoint = transformedData[i];
  // datapoint looks like this in the first iteration:
  // {
  //   average: 6.4
  //   name: "milkTea"
  //   numMeasurements: 15
  // }

  // get the name of the current
  //  item by "digging" into the datapoint object
  // and the average liking value
  let food = datapoint.name;
  let average = datapoint.average;

  // in each iteration (once for each food)
  // we create a div
  let bar = document.createElement("div");

  // next, we assign the className to the div
  // that will make sure basic bar styling (defined in css/style.css)
  // is applied to it (like height, color, margin)
  bar.className = "bar";
  // because the width is different for each bar
  // we define it right here in javascript using the
  // average value of each data point that we iterate over
  // we stored average value in the variable "average" on line 178
  bar.style.width = (average * 20) + "px";


  // labels
  // so far we have a div that has a width that corresponds
  // to the data value. next we create a p-tag the
  // text (innerHTML) of which is the name of the food currently
  // iterated over
  // we stroed the name in the variable "food" on line 177
  // create the tag
  let barname = document.createElement("p");
  // change the text
  barname.innerHTML = food;
  // now here we insert the p tag into the div tag we created above
  bar.appendChild(barname);
  // at this point the element we have created using JavaScript only
  // looks like:
  // <div class="bar"><p>milkTea</p></div>
  // (that is for the first datapoint (milkTea) that we iterate over)

  // that whole element (the div containing the p tag)
  // we append to the body after all
  // bring it from "JavaScript world" to "HTML world"
  document.body.appendChild(bar);

  // we could also have a designated container prepared in our
  // html in which to "fill" the divs


}
