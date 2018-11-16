let p;
document.addEventListener("DOMContentLoaded", function() {
  p = document.getElementById("submit");
  // p.addEventListener("click", postAjax);
  p.addEventListener("click", () => {
    ajax("https://ow53ugb38i.execute-api.eu-west-1.amazonaws.com/Prod", {
      type: "POST",
      payload: JSON.stringify({ emailAddress: "hallo@welt.fe" })
    });
  });
});

function ajax(url, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  callback = callback || function() {};
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE || xhr.readyState === 4) {
      if (xhr.status >= 400) {
        return callback(new Error(xhr.responseText || xhr.statusText));
      }
      try {
        return callback(null, JSON.parse(xhr.responseText));
      } catch (e) {
        return callback(new Error("invalid_response"));
      }
    }
  };
  xhr.onerror = function(err) {
    return callback(error);
  };
  xhr.open(options.type, url);
  xhr.send(options.payload);
}

/* 

function postAjax() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://ow53ugb38i.execute-api.eu-west-1.amazonaws.com/Prod",
    true
  );
  xhr.withCredentials = true;
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
}
*/
