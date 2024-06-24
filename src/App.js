import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Création',
      description: 'Un film sur la création de ',
      posterURL: 'https://i.pinimg.com/564x/59/04/72/5904721380bc9927fd3b2c7f25391058.jpg',
      note: 5,
    },
    {
      title: 'Interstellar',
      description: 'voyage à travers le temps .',
      posterURL: 'https://i.pinimg.com/564x/8d/6b/40/8d6b4023abdb91e2c0f6946a4a5854bc.jpg',
      note: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.note >= filterRate
  );

  return (
    <div className="App">
      <h1>Application de Film</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
};

export default App;
