// script.js

document.addEventListener('DOMContentLoaded', function () {
    var subscribeForm = document.querySelector('.subscribe-section form');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Assuming you want to show a simple alert for demonstration purposes
        alert('You\'re subscribed! Thank you.');
    });
});
