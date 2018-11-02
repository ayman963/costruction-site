function postAjax() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://ow53ugb38i.execute-api.eu-west-1.amazonaws.com/Prod/"
  );
  xhr.onload = function() {
    const serverResponse = document.getElementById("submit");
    cosole.log(this.responseText);
  };

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("emailAdress=ayman.hisnawi@gmail.com");
}
// example request
//postAjax('http://foo.bar/', 'p1=1&p2=Hello+World', function(data){ console.log(data); });

// example request with data object
