// this runs at page load
(function() {
  centerLine();
  console.log('hello');
})();


console.log('inside main.js');
/*
 * Open & Close the mobile nav
 */
var body = document.getElementsByTagName('body')[0];

var mobileNavToggle = document.getElementById('js-mobileNavToggle');
mobileNavToggle.addEventListener('click', function() {
  body.classList.toggle('mobile-nav');
  console.log('mobileNavToggle just ran again');
});

////////////////////////////////////////////////
// couldn't figure out what this was, but 
// it was for the mobile button that just toggled the menu
// that has been removed from the markup now
// this is for the button that will get removed eventually
// var navOpenBtn = document.getElementById('js-menuOpen');
// navOpenBtn.addEventListener('click', function() {
//   body.classList.toggle('mobile-nav');
//   console.log('button nav toggle');
// })


/*
 * Open & Close the form
 */
var form = document.getElementById('js-form');
var formOpenBtn = document.getElementById('js-formOpen');
var formCloseBtn = document.getElementById('js-formClose');

formOpenBtn.addEventListener('click', function() {
  form.classList.toggle('form-visible');
  console.log('form open');
});

formCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('form close');
  form.classList.toggle('form-visible');
});

// handle ajax form. turned off
// var theForm = document.getElementsByTagName('form')[0]
// theForm.addEventListener('submit', function(e) {
  
//   e.preventDefault();
//   // var data = form.serialize();
//   console.log('form submit!');
//   console.log( $(this) );

//   var $form = $(this);    
//     // serialize the data
//   var formData = $form.serialize();
//   console.log(formData);

//   $.ajax({
//     url: "https://formspree.io/nroth10@gmail.com", 
//     method: "POST",
//     data: formData,
//     dataType: "json",
//     success: function(msg){
//       alert("form post success!");
//         //$("#stayInformed").modal('hide');
//     },
//     error: function(){
//         alert("form post failed");
//     } 
//   });

// });

// add escape key to end form
/*
document.keyup(function(e) {
  let formOpen = form.classList.contains('form-visible');
  if (e.keyCode == 27 && formOpen) { // escape key maps to keycode `27`
    // <DO YOUR WORK HERE>
    console.log('close-the-form');
  }
});
*/






/*
HIGHLIGHTER FUNCTION
*/

var header = document.getElementById('js-header');

window.onscroll = function() {
  var highlightClass = 'isHighlighted'
  var highLighted = header.classList.contains(highlightClass);
  var scrollBreak = 40;
  var scrollTop = window.scrollY;  

  if (scrollTop > scrollBreak) {
    if (!highLighted) {
      console.log('do something');
      header.classList.toggle(highlightClass);
    }
  } else if (highLighted) {
    console.log('highlighted, do something');
    header.classList.toggle(highlightClass);
  }
};

/** toggle center line */
function centerLine() {
  document.getElementsByClassName('center-line')[0].classList.toggle('hide');
}

// toggle mobile nav
// function toggleMobileNav() {
//   body.classList.toggle('mobile-nav-hidden');
//   console.log('mobile-nav ran');
// }

// function headerDebug() {
//   header.classList.toggle('debug');
// }


console.log('end of main.js');







