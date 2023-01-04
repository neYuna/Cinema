export const fetchMovies = (page: number) => {
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// export const fetchMoviesSearch = (search: string) => {
//   return fetch(
//     `https://reactjs-cdp.herokuapp.com/movies?&search=${search}&searchBy=title&limit=20`
//   ).then((response) => {
//     return response.json();
//   });
// };

export const fetchMoviesSearch = (search: string) => {
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
