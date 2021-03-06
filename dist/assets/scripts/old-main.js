/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // Check to see if there's an updated version of service-worker.js with
      // new files to cache:
      // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-registration-update-method
      if (typeof registration.update === 'function') {
        registration.update();
      }

      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // ////////////////////////////////////////////////////////
  // Your custom JavaScript goes here  

  // var body = document.getElementsByTagName('body')[0];
  // const header = document.getElementById('js-header-2');
  // const mobileNavToggle = document.getElementById('js-mobileNavToggle');
  // mobileNavToggle.addEventListener('click', function() {
  //   body.classList.toggle('mobile-nav');
  //   console.log('mobileNavToggle just ran');
  // });

  // const window = document.getElementBy

  // this runs at page load
  centerLine();
})();

var body = document.getElementsByTagName('body')[0];
// const header2 = document.getElementById('js-header-2');
// const window = document.getElementsByTagName(window);
// const formButton = document.getElementById('js-formButton');
// const formToggleButtons = document.getElementsByClassName('js-formToggle')[0];
const form = document.getElementById('js-form');
// formButton.addEventListener('click', () => console.log('click') );
// formButton.addEventListener('click', () => form.style.display = 'block' );
// formToggleButtons.addEventListener('click', () => form.classList.toggle('form-visible') );
const formOpenBtn = document.getElementById('js-formOpen');
const formCloseBtn = document.getElementById('js-formClose');

formOpenBtn.addEventListener('click', function() {
  form.classList.toggle('form-visible');
  console.log('form open');
});
formCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('form close');
  form.classList.toggle('form-visible');
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('form submit!');
});

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
 * Open & Close the mobile nav
 */

var mobileNavToggle = document.getElementById('js-mobileNavToggle');
mobileNavToggle.addEventListener('click', function() {
  body.classList.toggle('mobile-nav');
  console.log('mobileNavToggle just ran again');
});

// this is for the button that will get removed eventually
var navOpenBtn = document.getElementById('js-menuOpen');
navOpenBtn.addEventListener('click', function() {
  body.classList.toggle('mobile-nav');
  console.log('button nav toggle');
})



/*
HIGHLIGHTER FUNCTION
*/

const header = document.getElementById('js-header');

window.onscroll = function() {
  let highLighted = header.classList.contains('highlighted');
  let scrollBreak = 40;
  let scrollTop = window.scrollY;
  // console.log('SCROLLED +' + window.scrollY );
  // console.log(scrolled);
  // console.log(scrollTop);

  if (scrollTop > scrollBreak) {
    if (!highLighted) {
      console.log('do something');
      header.classList.toggle('highlighted');
    }
  } else if (highLighted) {
    console.log('highlighted, do something');
    header.classList.toggle('highlighted');
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
