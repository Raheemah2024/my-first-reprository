const submitBtn = document.getElementById("submit")

function addMovie() {
    const inputName = document.getElementById("movieName");
    const inputUrl = document.getElementById("imageUrl");
    console.log(inputName);

    const movieImage = document.createElement('img');
    const movieName = document.createElement("h4");
    const movie = document.createElement("li");
    const movieContainer = document.getElementsByClassName("movieList")[0];
    console.log(movieContainer);

    movieImage.src = inputUrl.value;
    movieImage.classList.add("movieImage");
    movieName.textContent = inputName.value;

    movie.appendChild(movieImage);
    movie.appendChild(movieName);
    movieContainer.appendChild(movie)

    inputName.value = "";
    inputUrl.value = "";
}
submitBtn.addEventListener("click", addMovie)