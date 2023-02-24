import React, { createContext, useEffect, useState } from "react";

export const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [isError, setisError] = useState({ show: "false", msg: "" });
  const [query, setquery] = useState("titanic");

  const getMovies = async (dataUrl) => {
    setisLoading("true")
    try {
      const res = await fetch(dataUrl);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setmovie(data.Search);
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
      getMovies(`${URL}&s=${query}`);
    }, 500);

    return ()=> clearTimeout(timerOut)
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setquery }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
