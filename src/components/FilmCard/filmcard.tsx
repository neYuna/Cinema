import {
  MouseEventHandler,
  ReactEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICard } from "../../interface.ts/postcard";
import style from "./style.module.css";
import image from "../../assets/images/default.jpg";
import { fetchIMG } from "../fetch/fetchImg";
import loader from "./loader.gif";
import { useDispatch, useSelector } from "react-redux";
import { Like } from "../../assets/images";

import { Context } from "../../App";
import { likeFilm } from "../../store/actions/films";
import { LikedFilms } from "../LikedFilm/likedFilm";
import { TState } from "../../store/store";

export const FilmCard = (props: ICard) => {
  const [plot, setPlot] = useState<string | null>("");
  const { user } = useContext(Context);
  const dispatch = useDispatch();
  const mode = useSelector((state: TState) => state.modeReducer.mode);

  const likePost: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    dispatch(likeFilm(props));
  };

  // useEffect(() => {
  //   fetchIMG(props.nameEn).then((values) => {
  //     setPlot(values.plot);
  //   });
  // }, []);

  // const hadndleError: ReactEventHandler<HTMLImageElement> = () => {
  //   setImage(null);
  // };

  return (
    <>
      {props.posterUrl ? (
        <>
          <div className={style.card}>
            <img
              src={props.posterUrl}
              className={style.poster}
              // onError={hadndleError}
            ></img>
            <div className={style.rateAverage}>{props.rating || 8.2}</div>
            <h2 className={style.title}>{props.nameRu}</h2>
            <p className={mode ? style.lightGenre : style.genres}>
              {props.genres
                ? props.genres.map((item) => item.genre).join(", ")
                : null}
            </p>
            {user ? (
              <div className={style.iconsFlex}>
                <button onClick={likePost}>
                  <Like fill={props.liked ? "red" : "#808080"} />
                </button>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className={style.card}>
          <img src={image} className={style.poster} />
          <h2 className={style.title}>{props.nameRu}</h2>
          <p className={mode ? style.lightGenre : style.genres}>
            {props.genres.map((item) => item.genre).join(", ")}
          </p>
          {user ? (
            <div className={style.iconsFlex}>
              <button onClick={likePost}>
                <Like />
              </button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};
