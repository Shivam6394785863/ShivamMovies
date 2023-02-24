import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { URL } from './Context';
export default function SingleMovies() {
  const {id} = useParams()

  const [isLoading, setisLoading, isError,setisError] = useState(true);
  const [movie, setmovie] = useState("");

  const getMovies = async (dataUrl) => {
    setisLoading("true")
    try {
      const res = await fetch(dataUrl);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setmovie(data);
        setisError({
          show: false,
          msg: "",
        });
      } else {
        setisError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   let timerOut = setTimeout(() => {
      getMovies(`${URL}&i=${id}`);
    }, 500);

    return ()=> clearTimeout(timerOut)
  }, [id]);

  if(isLoading){
    return(
      <div>
        <div className="loading">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <section className='movie-section'>
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className='title'>{movie.Title}</p>
          <p></p>
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imbdRating}</p>
          <p className='card-text'>{movie.Country}</p>
          <NavLink className="back-btn" to="/">Go Back</NavLink>
        </div>
      </div>
    </section>
  )
}
