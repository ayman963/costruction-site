"use strict";
function submitForm(oFormElement) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    alert(xhr.responseText);
  }; // success case
  xhr.onerror = function() {
    alert(xhr.responseText);
  }; // failure case
  xhr.open(oFormElement.method, oFormElement.action, true);
  xhr.send(new FormData(oFormElement));
  return false;
}
