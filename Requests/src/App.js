import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://requests-32ae1-default-rtdb.firebaseio.com/movies.json')
      // const response = await fetch('https://swapi.dev/api/film')

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }


      const data = await response.json();

      const loadedMovies = [];
      for (const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

     
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  }

  async function addMovieHandler(movie) {
    const response = await fetch('https://requests-32ae1-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'applcation/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

// |===== ANOTHER WAY OF API REQUEST =====|
// function fetchMovieHandler() {
//   fetch('https://swapi.dev/api/films')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const transformedMovies = data.results.map(movieData => {
//         return {
//           id: movieData.episode_id,
//           title: movieData.title,
//           openingText: movieData.opening_crawl,
//           releaseDate: movieData.release_date
//         };
//       });
//       setMovies(transformedMovies);
//     });
// }