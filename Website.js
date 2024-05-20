let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results
    // Simulated list of items to search through
    var items = ['UCW Ready to Play "I Can Be Your Hero, Baby" e-sports build. '];
    for (i = 0; i < items.length; i++) {
        if (items[i].toUpperCase().indexOf(filter) > -1) {
            // If the search term matches an item, display it
            var result = document.createElement('div');
            result.textContent = items[i];
            searchResults.appendChild(result);
        }
    }
}
