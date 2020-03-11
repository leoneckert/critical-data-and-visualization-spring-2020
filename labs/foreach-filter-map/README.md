### JavaScript's `.forEach()`, `.filter()` and `.map()` method

#### Content
- [Intro](#intro)
- [The For Loop & `.forEach()`](#the-for-loop--foreach)
  - use `.forEach()` to **read** each element of an array and do something with its value.
- [The For Loop & `.filter()`](#the-for-loop--filter)
  - use `.filter()` to construct a new array with only a selection of element from an old array.
- [The For Loop & `.map()`](#the-for-loop--map)
  - use `.map()` to construct a new array that is based on an old array with each element modified.
- [Notes on style 1](#notes-on-style-1)
- [Notes on style 2](#notes-on-style-2)



###### Intro

Sometimes, we write code like this:

```js
// create "anna" p tag
let p1 = document.createElement('p');
p1.innerHTML = "anna";
document.body.appendChild(p1);

// create "bob" p tag
let p2 = document.createElement('p');
p2.innerHTML = "bob";
document.body.appendChild(p2);

// create "claire" p tag
let p3 = document.createElement('p');
p3.innerHTML = "claire";
document.body.appendChild(p3);

```

...but that's a lot to write! And it is very repetitive. To make our programming life less dreadful, we can use loops!

###### The For Loop & `.forEach()`

The **for-loop** is a classic. To build on the example above, I will create a data array, and then use a for-loop to create the paragraph elements.

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

for(let i = 0; i < data.length; i++){
  let p = document.createElement("p");
  p.innerHTML = data[i].name;
  document.body.appendChild(p);
}
```

This is a bit more convenient. It is also something we do a lot in code:
- an array that carries values we are interested in using (`data`),
- a loop that loops as many times as there are values in the array (`i < data.length`)
- and then does something with each element of the array as it iterates over them (`data[i].name`).

Because we use loops like this, when dealing with arrays so much, there is an even more convenient way of doing this: **arrays have an in-built method to let us access and 'do something with' each item that it carries**. This in-built method is called `.forEach()`:

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

function doSomething(element){
  let p = document.createElement("p");
  p.innerHTML = element.name; //note, we don't say "data[i].name" anymore
  document.body.appendChild(p);
}

data.forEach(doSomething);
```

What is going on here? `.forEach` as a *method* that we can use with any array. It iterates over each element of the array, and *for each* of them, it call a function that we supply (e.g. `doSomething`). Please note, we do not *call* the function ourselves (we call functions with the help of two parenthesis `doSomething()`, but here, they are missing) - instead we pass a reference of the function (its name) to the `.forEach()` method; then, `.forEach()` itself call our function as it iterates over the array. In each iteration, it passes the current element it is iterating over as an argument to our function. We receive this argument by defining the function with a parameter: `function doSomething(element){`.

In the first iteration, when `doSomething` is called, the value of `element` is `{name: "anna", age: 21}`, the second time it is `{name: "bob", age: 20}`, and the third time it's `name: "claire", age: 22}`.

###### The For Loop & `.filter()`

Sometimes, we are interested in only a subset of an array. Consider this:

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

let overTwenty = [];

for(let i = 0; i < data.length; i++){
  if( data[i].age > 20 ){
      overTwenty.push(data[i]);
  }
}

console.log(overTwenty);
// [ {name: "anna", age: 21}, {name: "claire", age: 22} ]
```

We have an array, we loop over it and only take (`filter`) those elements into a new array, that fulfill a certain condition (`data[i].age > 20`).

This is done so much that arrays have a method called `.filter()`. It allows us to define a condition that each element of an array is then tested against, to determine whether it should be included in a new array.

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

function filterFunction(element){
  if( element.age > 20 ){ //note, we don't say "data[i].age" anymore
    return true; // that means the current element makes it into our new "overTwenty" array
  }else{
    return false; //that means the current element will not be included in the "overTwenty" array
  }
}

let overTwenty = data.filter(filterFunction);

console.log(overTwenty);
// [ {name: "anna", age: 21}, {name: "claire", age: 22} ]
```

In our filterFunction, we inspect each datapoint, and determine whether to return `true` or `false`. If we return `true`, the element will be *copied* into a new array (`overTwenty`).

See [Notes on style](#Notes-on-style-1) for short ways of writing this.

###### The For Loop & `.map()`

Yet again in other moments, we want to create whole new arrays that are based on others. When working with data, we do this A LOT - after importing data, you often need to clean or transform some of its values into different formats. This approach might seem familiar:

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

let ageOnly = [];

for(let i = 0; i < data.length; i++){
  ageOnly.push(data[i].age)
}

console.log(ageOnly);
// [ 21, 20, 22 ]
```
We only pick the age out of the original array and create a new *clean* array to hold it. The same objective is reach here using the `.map()` method:

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

function mapFunction(element){
  return element.age;
}

let ageOnly = data.map(mapFunction);

console.log(ageOnly);
// [ 21, 20, 22 ]
```

The idea is the same to `.filter()`, except, instead of filtering which element to take into a new array, we define how to transform each element of a given array before taking it into a new one.

Here is an example of how this can be used differently:
```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

function mapFunction(element){
  element.status = "student"; // manipulate the element
  return element;  // then return the full element to be taken into the new array
}

let enhancedData = data.map(mapFunction);

console.log(enhancedData);
// [ {name: "anna", age: 21, status: "student"}, {name: "bob", age: 20, status: "student"}, {name: "claire", age: 22, status: "student"}];
```

###### Use `.filer()` and `.map()` in combination.

To get only the names of students over 20 years old, we can combine methods:

```js
let data = [
  {name: "anna", age: 21},
  {name: "bob", age: 20},
  {name: "claire", age: 22},
];

function mapFunction(element){
  return element.name;
}

function filterFunction(element){
  if( element.age > 20 ){
    return true;
  }else{
    return false;
  }
}

let namesOfTwentyYearOlds = data.filter(filterFunction).map(mapFunction);

console.log(namesOfTwentyYearOlds);
// [ "anna", "claire" ]
```

See [Notes on style](#Notes-on-style-2) for short ways of writing this.


###### Notes on style 1


```js
function filterFunction(element){
  if( element.age > 20 ){
    return true;
  }else{
    return false;
  }
}

let overTwenty = data.filter(filterFunction);
```
In this `filterFunction`, we essentially say: "if `element.age > 20` is `true`, return `true`, if `element.age > 20` is `false`, return `false`". Do you see the redundancy?

In addition, we can turn the filter function into an anonymous one - that means we define it right where we use it and don't give it a name. Here I put both insights into practice:
```js
let overTwenty = data.filter(function filterFunction(element){
                              return element.age > 20
                            });
```
we can even make it shorter:
```js
let overTwenty = data.filter((element)=>{return element.age > 20});
```
and shorter still:
```js
let overTwenty = data.filter(d=>d.age > 20);
```
...but we don't have to! Do what looks understandable to you, and comment your code! 👻

###### Notes on style 2

Short version:

```js
let namesOfTwentyYearOlds = data.filter(d=>element.age > 20).map(d=>d.name);
```
