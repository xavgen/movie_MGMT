let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = havewatched;
  }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
  console.log("A new movie is added");
  allMovies.push(movie);
};

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
  //   console.log("Printing all movies....");
  //   allMovies.forEach((movie) => {
  //     console.log(
  //       `${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`
  //     );
  //   });
  //   console.log("");
  //   console.log(`You have ${allMovies.length} movies in total`);
  const moviesList = document.getElementById("movies-list");
  moviesList.innerHTML = ""; // Clear previous content

  allMovies.forEach((movie, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. Title: ${movie.title}, Rating: ${
      movie.rating
    }, Watched: ${movie.haveWatched ? "Yes" : "No"}`;
    moviesList.appendChild(listItem);
  });

  const totalMovies = document.getElementById("total-movies");
  totalMovies.textContent = `Total number of movies: ${allMovies.length}`;
};

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
  //   console.log(`printing movie that has a rating higher than ${rating}`);
  //   const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
  //   highRatedMovies.forEach((movie) => {
  //     console.log(`${movie.title} has a rating of ${movie.rating}`);
  //   });
  //   console.log("");
  //   console.log(`In total, there are ${highRatedMovies.length} matches`);
  const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
  const matches = highRatedMovies.length;

  const highRatedList = document.getElementById("high-rated-list");
  highRatedList.innerHTML = ""; // Clear previous content

  highRatedMovies.forEach((movie, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. Title: ${movie.title}, Rating: ${
      movie.rating
    }`;
    highRatedList.appendChild(listItem);
  });

  const totalMatches = document.getElementById("total-matches");
  totalMatches.textContent = `Total matches: ${matches}`;
};

//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
  console.log("changing the status of the movie...");
  const movieToChange = allMovies.find((movie) => movie.title === title);
  if (movieToChange) {
    movieToChange.haveWatched = !movieToChange.haveWatched;
  }
};

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
