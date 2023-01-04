import style from "./style.module.css";
import { ICard } from "../../interface.ts/postcard";
import { FilmCard } from "../FilmCard/filmcard";
import like from "./like.svg";
import watch from "./watch.svg";
import { useNavigate } from "react-router-dom";
import { NavigateToItem } from "typescript";
import { ItemRender } from "antd/lib/upload/interface";

export interface IList {
  films: ICard[];
  onClickFilm: (id: number) => void;
}

export const FilmsList = ({ films, onClickFilm }: IList) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.filmsList}>
        {films.map((item) => {
          const clickFilm = () => {
            navigate(
              `/selected/${item.filmId ? item.filmId : item.kinopoiskId}`
            );
          };
          return (
            <div onClick={clickFilm}>
              <FilmCard
                filmId={item.filmId}
                key={item.filmId}
                nameRu={item.nameRu}
                nameEn={item.nameEn}
                rating={item.rating}
                ratingVoteCount={item.ratingVoteCount}
                year={item.year}
                posterUrl={item.posterUrl}
                filmLength={item.filmLength}
                genres={item.genres}
                liked={item.liked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
