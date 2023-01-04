import { Link } from "react-router-dom";
import { Button } from "../UI/Button/button";
import style from "./style.module.css";

export const Landing = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.flex}>
          <h1>Welcome to the</h1>
          <div className={style.title}>MovieHouse</div>
          <p className={style.text}>
            Dive in the real cinema theater. Enjoy living. Enjoy watching.
          </p>

          <Link to={'./Main'} className={style.link}>Dive In</Link>
        </div>
      </div>
    </div>
  );
};
