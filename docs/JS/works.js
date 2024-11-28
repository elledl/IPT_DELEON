function toggleCard(card) {
    card.classList.toggle('active');
}

// Get the category parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// If there's a category parameter, find the corresponding filter button and make it active
if (category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === category) {
            button.classList.add('active'); // Add active class to the correct button
        } else {
            button.classList.remove('active'); // Remove active class from others
        }
    });
}
