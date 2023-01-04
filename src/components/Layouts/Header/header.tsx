import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../App";
import { TState } from "../../../store/store";
import { DarkModeToggle } from "../../DarkModeToggle";
import { Burger } from "../../NavBar";
import { Button } from "../../UI/Button/button";

import style from "./styles.module.css";

export const Header = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mode = useSelector(
    (state: TState) => state.modeReducer.mode
  );

  const handleOnChange = () => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  localStorage.setItem("mode", String(mode));

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.headerFlex}>
            <div className={style.burgerIcon}>
              <div>
                <div>
                  <Burger />
                </div>
              </div>
              <div>
                <DarkModeToggle inputChecked={mode} onChange={handleOnChange} />
              </div>
            </div>
            <Link className={style.link} to={"/Main"}>
              <div className={mode ? style.lightLogo : style.logo}>
                MovieHouse
              </div>
            </Link>
            {user ? (
              <div className={style.signedFlex}>
                <h1 className={style.username}>{user.username}</h1>
                <Button text={"LogOut"} onClick={logOut} />
              </div>
            ) : (
              <div className={style.headerButtons}>
                <Button onClick={() => navigate("/login")} text={"Log In"} />
                <Button
                  onClick={() => navigate("/registration")}
                  text={"Sign Up"}
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
