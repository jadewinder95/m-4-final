//http://www.omdbapi.com/?apikey=[84eb427b]&

// Toggle mobile nav
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Search bar functionality
const searchInput = document.getElementById("searchInput");
const movies = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();

  movies.forEach(movie => {
    const title = movie.querySelector(".movie__title").textContent.toLowerCase();
    movie.style.display = title.includes(filter) ? "" : "none";
  });
});


