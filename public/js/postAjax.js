let p;
document.addEventListener("DOMContentLoaded", function() {
  p = document.getElementById("submit");
  p.addEventListener("click", postAjax);
});

function postAjax() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://ow53ugb38i.execute-api.eu-west-1.amazonaws.com/Prod",
    true
  );
  xhr.onload = function() {
    //const serverResponse = document.getElementById("submit");
    console.log(this.responseText);
    document.getElementById("submit").innerHTML = "Fertig";
    document.getElementById("submit").disabled = true;
    document.getElementById("emailAddress").value = "";
  };

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send('{ "emailAdress": "hallo@welt.fe" }');
}
// example request
//postAjax('http://foo.bar/', 'p1=1&p2=Hello+World', function(data){ console.log(data); });

// example request with data object
