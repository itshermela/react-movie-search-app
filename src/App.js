import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchMovies from './SearchMovies';
function App() {
  return (
    <div className="container">
      <h1 className ="text-center mb-4">React Movie Search</h1>
      <SearchMovies/>
    </div>
  );
}

export default App;
