// fyi, ascii banners from: http://patorjk.com/software/taag/#p=display&f=Ogre

// uncomment below code section by section while monitoring the console



//                      _                              _
//  _ __ __ _ _ __   __| | ___  _ __ ___   __   ____ _| |_   _  ___
// | '__/ _` | '_ \ / _` |/ _ \| '_ ` _ \  \ \ / / _` | | | | |/ _ \
// | | | (_| | | | | (_| | (_) | | | | | |  \ V / (_| | | |_| |  __/
// |_|  \__,_|_| |_|\__,_|\___/|_| |_| |_|   \_/ \__,_|_|\__,_|\___|
//
// testing d3 different random number generators:
// https://observablehq.com/@d3/d3-random#normal

let getRandom = d3.randomNormal(50, 11); //as so often, d3 returns a function that we can use
let testRandomNumber = getRandom();
console.log("testing random number:", testRandomNumber);

//                      _                       _        _
//  _ __ __ _ _ __   __| | ___  _ __ ___    ___| |_ _ __(_)_ __   __ _
// | '__/ _` | '_ \ / _` |/ _ \| '_ ` _ \  / __| __| '__| | '_ \ / _` |
// | | | (_| | | | | (_| | (_) | | | | | | \__ \ |_| |  | | | | | (_| |
// |_|  \__,_|_| |_|\__,_|\___/|_| |_| |_| |___/\__|_|  |_|_| |_|\__, |
//                                                               |___/
//
//from https://stackoverflow.com/a/1349426

function randomKey(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
let testRandomKey = randomKey(5);
console.log("testing random key:", testRandomKey);


//                      _                                        _ _
//  _ __ __ _ _ __   __| | ___  _ __ ___     ___ _ __ ___   ___ (_|_)
// | '__/ _` | '_ \ / _` |/ _ \| '_ ` _ \   / _ \ '_ ` _ \ / _ \| | |
// | | | (_| | | | | (_| | (_) | | | | | | |  __/ | | | | | (_) | | |
// |_|  \__,_|_| |_|\__,_|\___/|_| |_| |_|  \___|_| |_| |_|\___// |_|
//                                                            |__/
//

let emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "😡", "😠", "😷", "🤒", "🤕", "🤢", "🤧", "😇", "🤠", "🤡", "🤥", "🤓"];
function randomEmoji(){
  d3.shuffle(emojis);
  return emojis[0];
}
let testRandomEmoji = randomEmoji();
console.log("testing random emoji:", testRandomEmoji);


//
//                            _       _                    _       _
//  _ __   _____      __   __| | __ _| |_ __ _ _ __   ___ (_)_ __ | |_
// | '_ \ / _ \ \ /\ / /  / _` |/ _` | __/ _` | '_ \ / _ \| | '_ \| __|
// | | | |  __/\ V  V /  | (_| | (_| | || (_| | |_) | (_) | | | | | |_
// |_| |_|\___| \_/\_/    \__,_|\__,_|\__\__,_| .__/ \___/|_|_| |_|\__|
//                                            |_|
//

function newDatapoint(){
  let randKey = randomKey(5);
  let randomValue = getRandom();
  let testRandomEmoji = randomEmoji();
  return {key: randKey, name:testRandomEmoji, value: randomValue}
}
let testNewDatapoint = newDatapoint();
console.log("testing new datapoint:", testNewDatapoint);


//  _       _ _   _       _       _       _
// (_)_ __ (_) |_(_) __ _| |   __| | __ _| |_ __ _
// | | '_ \| | __| |/ _` | |  / _` |/ _` | __/ _` |
// | | | | | | |_| | (_| | | | (_| | (_| | || (_| |
// |_|_| |_|_|\__|_|\__,_|_|  \__,_|\__,_|\__\__,_|
//

let initialNum = 10;
let data = [];
function initializeData(){
  for(let i = 0; i < initialNum; i++){
    data.push(newDatapoint());
  }
}
initializeData();
console.log("initial data:", data);

//
//            _     _       _       _                    _       _
//   __ _  __| | __| |   __| | __ _| |_ __ _ _ __   ___ (_)_ __ | |_ ___
//  / _` |/ _` |/ _` |  / _` |/ _` | __/ _` | '_ \ / _ \| | '_ \| __/ __|
// | (_| | (_| | (_| | | (_| | (_| | || (_| | |_) | (_) | | | | | |_\__ \
//  \__,_|\__,_|\__,_|  \__,_|\__,_|\__\__,_| .__/ \___/|_|_| |_|\__|___/
//                                          |_|
//

function addDatapoints(num){
  for(let i = 0; i < num; i++){
    data.push(newDatapoint());
  }
  console.log("added", num, "datapoints. data:", data);
}
// test it!
addDatapoints(1);

//now bind this function to a button in script.js


//                                          _       _                    _       _
//  _ __ ___ _ __ ___   _____   _____    __| | __ _| |_ __ _ _ __   ___ (_)_ __ | |_ ___
// | '__/ _ \ '_ ` _ \ / _ \ \ / / _ \  / _` |/ _` | __/ _` | '_ \ / _ \| | '_ \| __/ __|
// | | |  __/ | | | | | (_) \ V /  __/ | (_| | (_| | || (_| | |_) | (_) | | | | | |_\__ \
// |_|  \___|_| |_| |_|\___/ \_/ \___|  \__,_|\__,_|\__\__,_| .__/ \___/|_|_| |_|\__|___/
//                                                          |_|
//

function removeDatapoints(num){
  for(let i = 0; i < num; i++){
    let randomIndex = Math.floor(Math.random()*data.length)
    data.splice(randomIndex, 1);
  }
  console.log("removed", num, "datapoints. data:", data);

}
// test it!
removeDatapoints(1);

//now bind this function to a button in script.js


//                                       ___               _     _
//  _ __ ___ _ __ ___   _____   _____   ( _ )     __ _  __| | __| |
// | '__/ _ \ '_ ` _ \ / _ \ \ / / _ \  / _ \/\  / _` |/ _` |/ _` |
// | | |  __/ | | | | | (_) \ V /  __/ | (_>  < | (_| | (_| | (_| |
// |_|  \___|_| |_| |_|\___/ \_/ \___|  \___/\/  \__,_|\__,_|\__,_|
//

function removeAndAddDatapoints(numR, numA){
  removeDatapoints(numR);
  addDatapoints(numA);
}
//test it!
removeAndAddDatapoints(1, 1);

//now bind this function to a button in script.js


//                 _         _       _
//  ___  ___  _ __| |_    __| | __ _| |_ __ _
// / __|/ _ \| '__| __|  / _` |/ _` | __/ _` |
// \__ \ (_) | |  | |_  | (_| | (_| | || (_| |
// |___/\___/|_|   \__|  \__,_|\__,_|\__\__,_|
//

function sortDatapoints(){
  data.sort(function(a,b){return a.value-b.value});
  console.log("sorted data:", data);

}
//test it!
sortDatapoints();

//now bind this function to a button in script.js


//      _            __  __ _            _       _
//  ___| |__  _   _ / _|/ _| | ___    __| | __ _| |_ __ _
// / __| '_ \| | | | |_| |_| |/ _ \  / _` |/ _` | __/ _` |
// \__ \ | | | |_| |  _|  _| |  __/ | (_| | (_| | || (_| |
// |___/_| |_|\__,_|_| |_| |_|\___|  \__,_|\__,_|\__\__,_|
//

function shuffleDatapoints(){
  d3.shuffle(data);
  console.log("shuffled data:", data);

}
//test it!
shuffleDatapoints();

//now bind this function to a button in script.js
