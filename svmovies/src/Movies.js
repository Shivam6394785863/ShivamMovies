import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context";

export default function Movies() {
  const { movie, isLoading } = useContext(AppContext);

  if(isLoading){
    return(
      <div >
        <div className="loading">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((item) => {
          const { imdbID, Title, Poster } = item;
                const movieName  = Title.substring(0,15)

          return <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                    <div className="card-info">
                        <h2>{movieName.length>=15? `${movieName}...` :movieName}</h2>
                        <img src={Poster} alt={imdbID} />
                    </div>
                </div>
          </NavLink>;
        })}
      </div>
    </section>
  );
}
