export const fetchIMG = (title: string) => {
  return fetch(`http://www.omdbapi.com/?apikey=9f760205&t=${title}`).then(
    (response) => {
      return response.json();
    }
  );
};
