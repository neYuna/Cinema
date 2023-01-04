import { ICard } from "../../interface.ts/postcard";
import { ACTIONS } from "../reducers/constants";

export const likeFilm = (film: ICard) => {
  return { type: ACTIONS.LIKE_FILM, film };
};

export const setAllFilms = (films: ICard[]) => {
  return {
    type: ACTIONS.SET_ALL_FILMS,
    films,
  };
};
