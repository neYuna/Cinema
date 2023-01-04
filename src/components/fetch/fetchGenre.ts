export const fetchGenres = (genre: number, page: number) => {
  // return fetch(
  //   `https://reactjs-cdp.herokuapp.com/movies?limit=80&offset=${offset}&search=${genre}&searchBy=genres`
  // ).then((response) => {
  //   return response.json();
  // });

  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    return response.json();
  });
};

// return fetch(
//    https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=3&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1,
//   {
//     method: "GET",
//     headers: {
//       "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
//       "Content-Type": "application/json",
//     },
//   }
// )


export const fetchSimilarFilms = (id: number) => {
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,    {
      method: "GET",
      headers: {
        "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    return response.json();
  });
};
