import { combineReducers, createStore } from "redux";
import { ILikeState, filmsReducer } from "./reducers/filmsReducer";
import { IMode, modeReducer } from "./reducers/modeReducer";

export type TState = {
filmsReducer: ILikeState,
modeReducer: IMode,
}

const rootReducer = combineReducers({
modeReducer,
 filmsReducer,
});

export let store = createStore(rootReducer);
