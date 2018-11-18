let p;
document.addEventListener("DOMContentLoaded", function() {
  p = document.getElementById("submit");
  email = document.getElementById("emailAddress");
  // p.addEventListener("click", postAjax);
  p.addEventListener("click", () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      ajax("https://ow53ugb38i.execute-api.eu-west-1.amazonaws.com/Prod", {
        type: "POST",
        payload: {
          emailAddress: email.value
        }
      });
      console.log("invalid email");
    }
    console.log("email sent");
  });
});

function ajax(url, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  callback =
    callback ||
    function() {
      console.log(this.responseText);
      document.getElementById("submit").innerHTML = "Fertig";
      document.getElementById("submit").disabled = true;
      document.getElementById("emailAddress").value = "";
    };
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
    return callback(err);
  };

  xhr.open(options.type, url);
  xhr.send(JSON.stringify(options.payload));
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
