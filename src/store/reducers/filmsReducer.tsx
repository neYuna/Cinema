import { AnyAction } from "redux";
import { ICard } from "../../interface.ts/postcard";
import { ACTIONS } from "./constants";

export interface ILikeState {
  likedFilms: ICard[];
  watchLaterFilms: ICard[];
  allFilms: ICard[];
}

const likedStorage = localStorage.getItem("like");

const defaultState: ILikeState = {
  likedFilms: likedStorage == null ? [] : JSON.parse(likedStorage),
  watchLaterFilms: [],
  allFilms: [],
};

export const filmsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.LIKE_FILM:
      const film = action.film;
      const newLikedfilm = film.liked //film.liked === true
        ? state.likedFilms.filter((item) => {
            // console.log('123456789',film)

            if (item.filmId === film.id) {
              return false;
            } else {
              return true;
            }
          })
        : state.likedFilms.concat([{ ...film, liked: true }]);
      const newAllFilms = state.allFilms.map((film) => {
        if (film.filmId === action.film.id) {
          film.liked = !film.liked;
        }
        return film;
      });
      return {
        ...state,
        likedFilms: newLikedfilm,
        allFilms: newAllFilms,
      };
    case ACTIONS.SET_ALL_FILMS:
      return {
        ...state,
        allFilms: action.films,
      };

    default:
      return state;
  }
};

// [...state.likedFilms, film];
