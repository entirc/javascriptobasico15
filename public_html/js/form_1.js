//https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Data_form_validation
// 
// // There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

var form = document.getElementsByTagName('form')[2];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("keyup", function (event) {
    // Each time the user types something, we check if the
    // email field is valid.
    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        error.innerHTML = ""; // Reset the content of the message
        error.className = "error"; // Reset the visual state of the message
    }
}, false);
form.addEventListener("submit", function (event) {
    // Each time the user tries to send the data, we check
    // if the email field is valid.
    if (!email.validity.valid) {

        // If the field is not valid, we display a custom
        // error message.
        error.innerHTML = "Eu esperava um email válido!";
        error.className = "error active";
        // And we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
}, false);