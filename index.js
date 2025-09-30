//http://www.omdbapi.com/?apikey=[84eb427b]&

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav__links");

// Hamburger toggle
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Search bar functionality with map + slice
const searchInput = document.getElementById("searchInput");
const movies = Array.from(document.querySelectorAll(".movie")); // make it an array

searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();

  // Use map to create a new array of {movie, title}
  const filteredMovies = movies.map(movie => {
    const title = movie.querySelector(".movie__title").textContent.toLowerCase();
    return { movie, title };
  });

  // Limit results to first 5 using slice
  const visibleMovies = filteredMovies.filter(item =>
    item.title.includes(filter)
  ).slice(0, 5);

  // Hide all first
  movies.forEach(movie => (movie.style.display = "none"));

  // Show only the sliced results
  visibleMovies.forEach(item => (item.movie.style.display = ""));
});



