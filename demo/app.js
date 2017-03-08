//get element by id works BUT NOT GET ELEMENT BY CLASS WTF. will not detect 'teeth' if it's a class


//create trigger event.
document.getElementById('coffeeBtn').addEventListener('click', function coffeeTime () {
  console.log('coffee consumed');

  // 'if statement' looks for background color of HTML id 'teeth'
  if (document.getElementById('teeth').style.backgroundColor='#FAF9F4') {



   (document.getElementById('teeth').style.backgroundColor='#E7E1AD');
  } else {

    //can leave 'else' part blank
  }
});


// same thing for clicking 'teethCleaning button'
document.getElementById('teethCleaning').addEventListener('click', function cleaningTime () {
  console.log('dentist appt');
  if (document.getElementById('teeth').style.backgroundColor='#E7E1AD') {
   (document.getElementById('teeth').style.backgroundColor='#FAF9F4');
  } else {
  }
});
