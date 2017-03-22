var count = 0;

var cavity = document.getElementById('cavity');

var teeth = document.getElementById('teeth');

var coffee = document.getElementById('coffeeBtn');

var cleaningMagic = document.getElementById('teethCleaning');

//greeting on load
function greeting() {
    alert('Hey! Want some coffee?');
}
window.onload = greeting;

//create trigger event.
coffee.addEventListener('click', function coffeeTime() {
    console.log('coffee consumed ' + count);
    count++;
    // 'if statement' looks for background color of HTML id 'teeth'
    if (teeth.style.backgroundColor = '#FAF9F4') {

        //code executed if teeth background color is white:
        (teeth.style.backgroundColor = '#E7E1AD');
    } else {

    }

    if (count > 6) {
        (cavity.style.backgroundColor = '#2C2C2B');
        alert('Uh oh! Looks like you have a cavity!');
        console.log('counter more than 6');
    } else {}
});


// same thing for clicking 'teethCleaning button'
cleaningMagic.addEventListener('click', function cleaningTime() {
    console.log('brushed those pearly whites');
    if (document.getElementById('teeth').style.backgroundColor = '#E7E1AD') {
        (document.getElementById('teeth').style.backgroundColor = '#FAF9F4');
    } else {

    }
});
