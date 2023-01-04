import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ILikeState } from "../../store/reducers/filmsReducer";
import { TState } from "../../store/store";
import { FilmsList } from "../FilmList/filmlist";

export const LikedFilms = () => {
  const navigate = useNavigate()
  const liked = useSelector((state: TState) => state.filmsReducer.likedFilms);
  localStorage.setItem('like', JSON.stringify(liked))
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

  return (
    <>
      <FilmsList films={liked} onClickFilm={navigateToFilm} />
    </>
  );
};
