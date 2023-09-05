import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "grey",
};

export default function HomePage() {
  return (
    <>
      <div className="center-home">
        <h1>Film Picker</h1>
        <p>
          Browse the site to search for films and save them to a watch list!
        </p>
      </div>
      <ul>
        <li>
          <Link to="/films" style={linkStyle}>
            Explore Films
          </Link>
        </li>
        <li>
          <Link to="/search" style={linkStyle}>
            Search for your favorite Film
          </Link>
        </li>
      </ul>
    </>
  );
}
