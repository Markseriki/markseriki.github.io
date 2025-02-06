document.addEventListener('DOMContentLoaded', function () {
    
    new Swiper(".swiper", {
        loop: true,
        autoplay: {
            delay: 3000, // Slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    var subscribeForm = document.querySelector('.subscribe-section form');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Assuming you want to show a simple alert for demonstration purposes
        alert('You\'re subscribed! Thank you.');
    });

    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');

    // Toggle search bar visibility when search icon is clicked
    searchIcon.addEventListener('click', function() {
        searchContainer.style.display = (searchContainer.style.display === 'block') ? 'none' : 'block';
    });

    // Filter products based on user input
    const searchInput = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function() {
        const searchText = searchInput.value.toLowerCase();
        // Implement filtering logic to display relevant products based on searchText
        // You can manipulate the DOM to show/hide products dynamically
        // For now, let's just log the searched text to the console
        console.log('Search query:', searchText);
    });
});
