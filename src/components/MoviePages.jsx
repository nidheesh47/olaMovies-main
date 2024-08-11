import React, { useEffect, useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import Footer from './Footer';
function MoviePages() {
  const [movies, setmovies] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzcyYmViYjdhZWUzOGMzYWM5ZWJhY2ZjZTQ2ODhlYiIsIm5iZiI6MTcyMzIyMTczNS42NDIzMzksInN1YiI6IjY2YjYzZTUyMzgyN2NjM2QxY2Q3YzkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-SEbrnGkiV_AqWny8twhnLgWyJ_TjuqF0LHj93FNEg4',
    },
  };
  const fetchmovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options,
      );
      const result = await response.json();
      console.log(result);
      const listOfmovies = result.results.map((movie)=>({
        title: movie.title,
        image: movie.poster_path,
        description : movie.release_date
      }))
      setmovies(listOfmovies)
    } catch (error) {
      console.error('Not working');
    }
  };
  useEffect(() => {
    fetchmovies();
  }, []);
  return (
    <div>
      <Header movies= {movies}/>
      <div>
        <MovieList movies = {movies}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MoviePages;
