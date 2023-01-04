import {NavLink} from "react-router-dom";
import { genreArr } from "./mocks";
import style from "./style.module.css";

export const Burger = () => {
  return (
    <>
      <div className={style.burgerMenu}>
        <input id={style.menuToggle} type="checkbox" />
        <label className={style.menuBtn} htmlFor={style.menuToggle}>
          <span></span>
        </label>
        <ul className={style.menuBox}>
          {genreArr.map((genre: string, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? style.active : style.menuItem)}
                  to={`/genres/${index + 1}`}
                >
                  {genre}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
