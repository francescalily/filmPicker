import React, { useState, useEffect } from "react";

export default function FilmInfo() {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=batman&apikey=fb1e0f8f")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFilm(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>
        {
          film.map((f) => (
            <div key={f.imdbID}>
              <h2>{f.Title}</h2>
              <img src={f.Poster} alt={f.Title} />
            </div>
          ))
          /* {
          film
            ? film.map((f) => (
                <div key={f.imdbID}>
                  <h2>{f.Title}</h2>
                  <img src={f.Poster} alt={f.Title} />
                </div>
              ))
            : null
        } */
        }
      </div>
    </>
  );
}
