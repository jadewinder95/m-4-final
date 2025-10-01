
// Navbar toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// OMDb API Setup
const API_KEY = "84eb427b"; 
const API_URL = "https://www.omdbapi.com/?apikey=" + API_KEY + "&s=";

// Fetch movies
async function fetchMovies(query) {
  try {
    const response = await fetch(API_URL + query);
    const data = await response.json();
    if (data.Response === "True") {
      return data.Search;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error fetching movies:", err);
    return [];
  }
}

// Render movies
function renderMovies(movies) {
  const moviesContainer = document.getElementById("moviesContainer");
  if (!movies.length) {
    moviesContainer.innerHTML = "<p style='text-align:center;'>No movies found.</p>";
    return;
  }

  moviesContainer.innerHTML = movies
    .slice(0, 6)
    .map(movie => `
      <div class="movie">
        <div class="movie__img--wrapper">
          <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400"}" 
               alt="${movie.Title}" class="movie__img">
        </div>
        <h3 class="movie__title">${movie.Title}</h3>
        <p class="movie__ratings">${movie.Year}</p>
      </div>
    `)
    .join("");
}

// Search + filter
const searchInput = document.getElementById("searchInput");
const filterInput = document.getElementById("filterInput");

searchInput.addEventListener("keyup", async function () {
  const query = searchInput.value.trim();
  if (query.length < 3) {
    document.getElementById("moviesContainer").innerHTML =
      "<p style='text-align:center;'>Type at least 3 letters...</p>";
    return;
  }

  const movies = await fetchMovies(query);

  const filterValue = filterInput.value.trim();
  const filteredMovies = filterValue
    ? movies.filter(movie => movie.Year.includes(filterValue))
    : movies;

  renderMovies(filteredMovies);
});



