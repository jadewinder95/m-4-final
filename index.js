
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const searchInput = document.getElementById("searchInput");
const movies = Array.from(document.querySelectorAll(".movie")); 

searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();

  const filteredMovies = movies.map(movie => {
    const title = movie.querySelector(".movie__title").textContent.toLowerCase();
    return { movie, title };
  });

  const visibleMovies = filteredMovies.filter(item =>
    item.title.includes(filter)
  ).slice(0, 5);

  movies.forEach(movie => (movie.style.display = "none"));

  visibleMovies.forEach(item => (item.movie.style.display = ""));
});



