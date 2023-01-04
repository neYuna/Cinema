import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ICard } from "../../interface.ts/postcard";
import { setAllFilms } from "../../store/actions/films";
import { TState } from "../../store/store";
import { fetchSimilarFilms } from "../fetch/fetchGenre";
import { FilmCard } from "../FilmCard/filmcard";
import { IList } from "../FilmList/filmlist";
import style from "./style.module.css";

export const SimilarFilms = (props: ICard) => {
  const [similar, setSimilar] = useState([]);
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const param = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchSimilarFilms(Number(param.filmId))
      .then(
        (film) => {
          return film.items;
        }
        // film.data.filter((item: ICard) => item.nameEn !== props.nameEn)
      )
      .then((item) => {
        // setSimilar(item);
        dispatch(setAllFilms(item));
      });
  }, [props.filmId]);

  return (
    <>
      <div className={style.similarFilms}>
        {films.map((film: ICard) => {
          const clickFilm = () => {
            // onClickFilm(film.id);
            navigate(
              `/selected/${film.filmId ? film.filmId : film.kinopoiskId}`
            );
          };
          return (
            <div onClick={clickFilm}>
              <FilmCard
                nameRu={film.nameRu}
                filmId={film.filmId}
                key={film.filmId}
                nameEn={film.nameEn}
                rating={film.rating}
                ratingVoteCount={film.ratingVoteCount}
                year={film.year}
                posterUrl={film.posterUrl}
                filmLength={film.filmLength}
                genres={film.genres}
                liked={film.liked}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
