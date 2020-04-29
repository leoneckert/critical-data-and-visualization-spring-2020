// in the javascript
// the only ingridient we need
// is a way to determine when exactly
// an element passes a certain point
// e.g. when a scrolling text reaches the middle
// of the page you might want to trigger
// a transition in your visualization

// we could code such a mechanism outselves, but
// on https://pudding.cool/process/scrollytelling-sticky/
// i found various light-weight libraries that do just that.
// one I tested is this: https://github.com/russellgoldenberg/enter-view
// you need to include it in the html:
//
//
// and after that you can use it just like this:


enterView({
	selector: '.special',
	enter: function(el) {
		console.log('a special element entered');
	},
	exit: function(el) {
    console.log('a special element exited');
	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	// offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
