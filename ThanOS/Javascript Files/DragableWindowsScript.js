// // ATTENTION: In this file, I somehow have not followed the DRY rule, because I cannot find a way to have the same behavior for every window component (Also due to the bad HTML code); Any help would be much appreciated.
// // Test comment
// //Used in version-history.html, workspace.html
// // Function to select all windows with their id name containing the word "window"

// // Change z-index based on active window
// var moreThanTwoWindowsActive = false;


// function selectElementsByIdWithWords(words) {
//   return document.querySelectorAll(`[id*="${words.join('-')}"]`);
// }
// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // if present, the header is where you move the DIV from:
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // otherwise, move the DIV from anywhere inside the DIV:
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       // set the element's new position:
//       elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//       elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }

//     function closeDragElement() {
//       // stop moving when mouse button is released:
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }

// // Get all elements matching the criteria
// const draggableElements = selectElementsByIdWithWords(['window']);
// console.log(draggableElements);
// // Make each element draggable
// draggableElementsWithoutHeaders.forEach(element => {
//   dragElement(element);
// });

// //

// ATTENTION: In this file, I somehow have not followed the DRY rule, because I cannot find a way to have the same behavior for every window component (Also due to the bad HTML code); Any help would be much appreciated.
// Test comment
//Used in version-history.html
// Make the DIV element draggable:


// Function to select all windows with their id name containing the word "window"

function selectElementByIdWithWords(words) {
  let elements = document.querySelectorAll(`[id*="${words.join('-')}"]`);

  if (elements.length > 0) {
    return elements[0, 1, 2, 3, 4, 5, 6, 7];
  } else {
    return null;
  }
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


dragElement(selectElementByIdWithWords('window'));