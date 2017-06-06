console.log('connected');

//create variables
  //what are we trying to target here? teeth element, coffee button element, cleaning button

var teeth = document.getElementById('teeth');

var coffee = document.getElementById('coffeeBtn');

var cleaningMagic = document.getElementById('teethCleaning');

//what if we could add a cavity after so many clicks?
  //let's add an HTML element to act as a "cavity"

var cavity = document.getElementById('cavity');

  //you don't get a cavity after eating or drinking something one time, right?
    //let's devise a way to keep count of how often the teeth come in contact with coffee

var count = 0;


//-------------------------------CREATE TRIGGER EVENTS-------------------------------------//

//here, we are using what's called an event handler. this particular event handler is "listening" for a "click"
  //other event handlers include page loading, inputs changed, even hovering over an element

  //create trigger event.
  coffee.addEventListener('click', function coffeeTime() {
      console.log('coffee consumed ' + count);
      count++;
      // 'if statement' looks for background color of HTML id 'teeth'
      if (teeth.style.backgroundColor = '#FAF9F4') {

          //code executed if teeth background color is white:
          (teeth.style.backgroundColor = '#E7E1AD');
      }

      else {

      }

      if (count > 6) {
          (cavity.style.backgroundColor = '#2C2C2B');
          alert('Uh oh! Looks like you have a cavity!');
          console.log('counter more than 6');
      } else {}
  });

//same thing for clicking the magical tooth cleaning apparatus
  //add click event
cleaningMagic.addEventListener('click', function cleaningTime() {
  console.log('brushed those chompers');
    if (teeth.style.backgroundColor = '#E7E1AD') {

    (teeth.style.backgroundColor = '#FAF9F4');

    }
    else {

    }

});
