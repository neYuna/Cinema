import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGenres } from "../fetch/fetchGenre";
import { FilmsList } from "../FilmList/filmlist";
import { Title } from "../Title";
import { Button } from "../UI/Button/button";
import spiner from "../../assets/images/spinner.svg";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { TState } from "../../store/store";
import { setAllFilms } from "../../store/actions/films";
import { genreArr } from "../NavBar/mocks";
export const SingleGenre = () => {
  const navigate = useNavigate();
  const { genre } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number[]>([]);

  const loadMore = (page: number) => {
    fetchGenres(Number(genre), page).then((values) => {
      dispatch(setAllFilms(values.films));
    });
  };

  useEffect(() => {
    setIsLoading(true);
    if (genre) {
      fetchGenres(+genre, 1)
        .then((film) => {
          dispatch(setAllFilms(film.items));
          for (let i = 1; i <= film.totalPages; i++) {
            if (page.length < film.totalPages) {
              page.push(i);
            }
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [genre]);

  // const navigateToFilm = (id: number) => {
  //   navigate(`/selected/${id}`);
  // };

  // const loadMore = () => {
  //   if (genre) {
  //     fetchGenres(genre, genredFilms.length).then((film) => {
  //       setGenredFilms(genredFilms.concat(film.data));
  //     });
  //   }
  // };

  return (
    <>
      <Title genre={genreArr[Number(genre) - 1]} />
      {isLoading ? (
        <div className={style.loader}>
          <img src={spiner} />
        </div>
      ) : (
        <FilmsList films={films} onClickFilm={() => {}} />
      )}
      <div className={style.load}>
        {page.map((item) => {
          return (
            <Button
              text={`${item}`}
              onClick={() => {
                loadMore(item);
              }}
            />
          );
        })}
      </div>
      {/* <Button text={"Load More"} onClick={loadMore} /> */}
    </>
  );
};
