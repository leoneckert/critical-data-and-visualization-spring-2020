
let w = 600;
let h = 400;
let radius = 50;
let color = "lightblue";


// how to make SVGs truly responsive (unlike I do here):
// https://stackoverflow.com/a/25978286
let viz = d3.select("#visualizationWrapper").append("svg")
	.attr("width", w)
	.attr("height", h)
	.attr("class", "viz")
	.style("background-color", "black")
;

let xScale = d3.scaleLinear().domain([0, 100]).range([0, w]);
let yScale = d3.scaleLinear().domain([0, 100]).range([0, h]);
let rScale = d3.scaleLinear().domain([0, 100]).range([10, h/2]);


let data = [   [50, 50]   ];

let graphGroup = viz.append("g").attr("class", "graphGroup");



function updateGraph(){

	let elements = graphGroup.selectAll(".datapoint").data(data)

	let enteringElements = elements.enter()

	enteringElements.append("circle")
			.attr("cx", function(d, i){
				let x = d[0];
				return xScale(x)
			})
			.attr("cy", function(d, i){
				let y = d[1];
				return yScale(y)
			})
			.attr("r", rScale(radius))
			.attr("fill", color)
			.attr("class", "datapoint")
	;

	let exitingElements = elements.exit()
	// exitingElements

	elements
			.transition()
			.attr("cx", function(d, i){
				let x = d[0];
				return xScale(x)
			})
			.attr("r", rScale(radius))
			.attr("fill", color)
	;

}



updateGraph();




d3.select("#leftButton").on("click", function(){
	data = [   [0, 50, 50]   ];
	updateGraph();
	console.log("left clicked");
})
d3.select("#rightButton").on("click", function(){
	data = [   [100, 50, 50]   ];
	updateGraph();
	console.log("left clicked");
})
d3.select("#smallButton").on("click", function(){
	radius = 5;
	// data = [   [100, 50, 5]   ];
	updateGraph();
	// console.log("left clicked");
})
d3.select("#largeButton").on("click", function(){
	radius = 100;
	updateGraph();
})

enterView({
	selector: '.scrollTriggerOne',
	enter: function(el) {
		console.log('a scrollTriggerOne element entered');
		color = "lightyellow";
		updateGraph();
	},
	exit: function(el) {
    console.log('a scrollTriggerOne element exited');
		color = "lightblue";
		updateGraph();
	},
	progress: function(el, progress) {
    console.log("the scrollTriggerOne element's progress is:", progress);
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
