// Function to parse the cookie header
function parseCookieHeader(header) {
    // Split the header into individual name-value pairs
    var pairs = header.split(";");
  
    // Create an object to store the cookies
    var cookies = {};
  
    // Loop through the name-value pairs and store them in the object
    for (var i = 0; i < pairs.length; i++) {
      var nameValue = pairs[i].split("=");
      cookies[nameValue[0].trim()] = nameValue[1];
    }
  
    // Return the object
    return cookies;
  }
  
  // Get the cookie header from the document
  var header = "firstname=nghia; lastname=Ngo, phone: 090; path=/;";
  
  // Parse the cookie header
  var cookies = parseCookieHeader(header);
  
  // Display the cookies in the console
  console.log(cookies);
  
  // Display the cookies in the HTML document
  document.getElementById("result").innerHTML = JSON.stringify(cookies);
  