import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { ICard } from "../../interface.ts/postcard";
import { FilmsList } from "../FilmList/filmlist";
import { fetchMovies, fetchMoviesSearch } from "../fetch/allFilmsFetch";
import style from "./style.module.css";
import { Button } from "../UI/Button/button";
import { Input } from "../UI/Input/input";
import { SelectedFilm } from "../SelectedFilm/selectedFilm";
import { useNavigate } from "react-router-dom";
import { Carusel } from "../Carousel";
import { TabButton } from "../UI/TabButton";
import { Tab } from "../UI/Tabs/tabs";
import { Context } from "../../App";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch, useSelector } from "react-redux";
import { TState } from "../../store/store";
import { setAllFilms } from "../../store/actions/films";
import spiner from "../../assets/images/spinner.svg";

export const AllFilms = () => {
  // const [films, setFilms] = useState<ICard[]>([]);
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Context);
  const [page, setPage] = useState<number[]>([]);
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  const loadMore = (page: number) => {
    fetchMovies(page).then((values) => {
      dispatch(setAllFilms(values.films));
    });
  };

  useEffect(() => {
    setIsLoading(true);

    fetchMoviesSearch(search)
      .then((values) => {
        dispatch(setAllFilms(values.films));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(1)
      .then((values) => {
        dispatch(setAllFilms(values.films));
        for (let i = 1; i <= values.pagesCount; i++) {
          if (page.length < values.pagesCount) {
            page.push(i);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

  return (
    <div className={style.allFilms}>
      <div className={style.inputSearch}>
        <Input value={search} onChange={handleSearch} />
      </div>
      {isLoading ? (
        <>
          <div className={style.loader}>
            <img src={spiner} />
          </div>
        </>
      ) : (
        <>
          <FilmsList films={films} onClickFilm={navigateToFilm} />
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
        </>
      )}
    </div>
  );
};
