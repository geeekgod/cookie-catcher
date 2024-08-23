var base64EncodedCookie = "BASE64_ENCODED_COOKIE"; // Replace with the base64 encoded cookie
var decodedCookie = atob(base64EncodedCookie);
var cookies = decodedCookie.split(";");
cookies.forEach(function (cookie) {
  document.cookie = cookie.trim() + "; path=/";
});
console.log("Cookies set:", document.cookie);


// The following code snippet to be run in the browser console will set the cookies in the browser.