import { useSelector } from "react-redux";
import { TState } from "../../../store/store";
import style from "./style.module.css";

export const Footer = () => {
  const mode = useSelector(
    (state: TState) => state.modeReducer.mode
  );

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h1 className={style.name}>MovieHouse</h1>
        <div className={style.mainDiv}>
          <ul>
            <li className={mode? style.lightBadget : style.badget}>
              <span className={style.apple}></span>
              <span className={mode? style.lightAppleText : style.appleText }>App Store</span>
            </li>
            <li className={mode? style.lightBadget : style.badget}>
              <span className={style.google}></span>
              <span className={mode? style.lightGoogleText : style.googleText }>Google Play</span>
            </li>
          </ul>
        </div>
        <div className={style.wrapper}>
          <div className={style.icon}>
            <a href="#" className={style.icons}>
              <i className={`${style.ico} ${style.icoFacebook}`}></i>
            </a>
            <a href="#" className={style.icons}>
              <i className={`${style.ico} ${style.icoTwitter}`}></i>
            </a>
            <a href="#" className={style.icons}>
              <i className={`${style.ico} ${style.icoLinkedin}`}></i>
            </a>
            <a href="#" className={style.icons}>
              <i className={`${style.ico} ${style.icoInstagram}`}></i>
            </a>
            <a href="#" className={style.icons}>
              <i className={`${style.ico} ${style.icoGithub}`}></i>
            </a>
          </div>
          <p className={style.axure}>
            &#169; 2022 MovieHouse
            <br />
            Individual Entrepreneur and Frontend developer Yuna <br /> Republic
            of Belarus, Minsk
          </p>
        </div>
      </div>
    </footer>
  );
};
