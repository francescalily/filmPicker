//franki notes to understand...

import React, { useState } from "react";
//adding the useState hook to add statemanagment

//code below - function defined which takes lastSearch as a single prop
//defining the four state variables needed using the useState hook
export default function SearchForm({ lastSearch }) {
  const [inputValue, setInputValue] = useState("");
  //above is managing text inside search input
  const [films, setFilms] = useState([]);
  //above is storing list of films from api
  const [loading, setLoading] = useState(false);
  //loading status - if data is being fetched or not
  const [error, setError] = useState(null);
  //handiling the errors if any

  function handleInput(e) {
    const newInput = e.target.value;
    //when user types something in, it changes the value to the set user value - stored as new value
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    //set to true because it is indicating that the data is being fetched and below I am getting the the current value of inputValue
    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=fb1e0f8f`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.Search) {
          //if search is there and films have been found, it sets the films state and loading false because it has loaded
          setFilms(data.Search);
        } else {
          setError(new Error(data.Error || "No films found"));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    setInputValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          placeholder={lastSearch || "Search for a film..."}
          value={inputValue}
          required
        />
        <input type="submit" value="Search" />
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <ul>
        {films.map((film) => (
          <li key={film.imdbID}>
            <h2>{film.Title}</h2>
            <img src={film.Poster} alt={film.Title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
