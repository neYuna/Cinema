import style from "./style.module.css";
import pic from "../../assets/images/default.jpg";
import { ReactEventHandler, useEffect, useState } from "react";

import { fetchIMG } from "../fetch/fetchImg";
import { fetchTrailer } from "../fetch/fetchTrailer";
import { ICard } from "../../interface.ts/postcard";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/images/spinner.svg";
import { fetchSimilarFilms } from "../fetch/fetchGenre";
import { FilmCard } from "../FilmCard/filmcard";
import { SimilarFilms } from "../SimilarFilms/similarFilms";
import { TState } from "../../store/store";
export const SelectedFilm = (props: ICard) => {
  const [plot, setPlot] = useState("");
  const [imdbID, setimdbID] = useState("");
  const [trailer, setTrailer] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const mode = useSelector((state: TState) => state.modeReducer.mode);

  // const hadndleError: ReactEventHandler<HTMLImageElement> = () => {
  //   setImage(pic);
  // };

  useEffect(() => {
    setIsLoading(true);

    fetchIMG(props.nameEn)
      .then((values) => {
        setimdbID(values.imdbID);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [props]);

  useEffect(() => {
    fetchTrailer(props.kinopoiskId ? props.kinopoiskId : 474).then((values) => {
      values.items.map((item: any) => {
        return item.url.includes("https://www.youtube.com")
          ? setTrailer(item.url)
          : trailer;
      });
    });
  }, [props.kinopoiskId]);

  return (
    <>
      {isLoading ? (
        <>
          <div className={style.loader}>
            <img src={loader} />
          </div>
        </>
      ) : (
        <>
          <div className={style.selectedFilm}>
            <div className={style.container}>
              <div className={style.flexBlock}>
                <div className={style.firstBlock}>
                  <div
                    onClick={() => navigate(-1)}
                    className={style.arrow}
                  ></div>
                  {/* <div className={mode ? style.lightTagline : style.tagline}>
                    {props.tagline}
                  </div> */}
                  {props.posterUrl ? (
                    <img
                      // onError={hadndleError}
                      className={style.image}
                      src={props.posterUrl}
                    />
                  ) : (
                    <img
                      // onError={hadndleError}
                      className={style.image}
                      src={pic}
                    />
                  )}
                </div>
                <div
                  className={mode ? style.lightSecondBlock : style.secondBlock}
                >
                  <h1 className={style.filmTitle}>{props.nameRu}</h1>
                  <div className={style.releaseDate}>
                    Год выпуска: {props.year}
                  </div>
                  <div className={style.runtime}>
                    Длительность: {props.filmLength} min.
                  </div>

                  <div className={style.revenue}>
                    Сюжет: {props.shortDescription}
                  </div>
                  <div className={style.genres}>
                    {" "}
                    {props.genres.map((item) => item.genre).join(", ")}
                  </div>

                  <div
                    className={mode ? style.lightRateBubbble : style.rateBubble}
                  >
                    <div className={style.ratePlace}>
                      <div className={style.rate}>{props.ratingImdb}</div>
                    </div>
                    <div>
                      {/* <div
                        className={
                          mode ? style.lightVoteCount : style.voteCount
                        }
                      ></div> */}
                      <div className={mode ? style.lightBudget : style.budget}>
                        Бюджет: 374909 $
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.video}>
                {trailer ? (
                  // <iframe
                  //   src={`${trailer}?width=1000`}
                  //   width="1000"
                  //   height="600"
                  //   allowFullScreen={true}
                  // ></iframe>
                  <ReactPlayer url={trailer} />
                ) : (
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=K7e3jpYf28I"}
                  />
                )}
              </div>
              <h1 className={style.similarTitle}>Similar Films</h1>
              <SimilarFilms
                nameRu={props.nameRu}
                filmId={props.filmId}
                key={props.filmId}
                nameEn={props.nameEn}
                rating={props.rating}
                ratingVoteCount={props.ratingVoteCount}
                year={props.year}
                posterUrl={props.posterUrl}
                filmLength={props.filmLength}
                genres={props.genres}
                liked={props.liked}
                // onClickFilm={navigateToFilm}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
