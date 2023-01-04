import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../../components/Layouts/Footer/footer";
import { Header } from "../../../components/Layouts/Header/header";
import { SelectedFilm } from "../../../components/SelectedFilm/selectedFilm";
import { ICard } from "../../../interface.ts/postcard";

export const SelectedPage = () => {
  const param = useParams();

  const [film, setFilm] = useState<ICard | null>();

  useEffect(() => {
    const promise = fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${param.filmId}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
          "Content-Type": "application/json",
        },
      }
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setFilm(values);
        console.log(film);
      });
  }, [param.filmId]);
  return (
    <>
      <Header />
      {film ? <SelectedFilm {...film} /> : null}
      <Footer />
    </>
  );
};
