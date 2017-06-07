
//create variables
//what are we trying to target here? teeth element, coffee button element, cleaning button


//you don't get a cavity after eating or drinking something one time, right?
//let's devise a way to keep count of how often the teeth come in contact with coffee

/*--------------LET'S MAKE SOME EVENT HANDLERS--------------------------------------*/

//here, we are using what's called an event handler. this particular event handler is "listening" for a "click"
//other event handlers include page loading, inputs changed, even hovering over an element


//same thing for clicking the magical tooth cleaning apparatus
//add click eventgit

// console.log("sup");

var teeth = document.getElementById('teeth');
var coffee = document.getElementById('coffeeBtn');
var clean = document.getElementById('teethCleaning');
var cavity = document.getElementById('cavity');
var count = 0;

coffee.addEventListener('click', function coffeeTeeth () {
  //change teeth color to coffee
  console.log("coffeeTeeth, count=", count);
  count += 1;
  teeth.style.backgroundColor = '#E7E1AD';
  if (count > 8) {
    cavity.style.backgroundColor = '#2C2C2B';
  }
});

clean.addEventListener('click', function cleanTeeth () {
  console.log("cleanTeeth");
  teeth.style.backgroundColor = '#FAF9F4';
});
// function coffeeTeeth () {
//   //change teeth color to brown
// }

// function cleanTeeth () {
//   //change teeth color to whiteish
// }
