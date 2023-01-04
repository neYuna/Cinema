import { ChangeEvent, createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { getUser } from "./components/fetch/registeruser";
import { Landing } from "./components/landing";
import { IUser } from "./interface.ts/user";
import { RootRouter } from "./router/router";
import loader from "./spinner.svg";
import { TState } from "./store/store";

export const Context = createContext<{
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  user: null,
  setUser: (value: IUser | null) => {},
});
const access = localStorage.getItem("access");

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);
  useEffect(() => {
    console.log("1access", access);

    if (access) {
      console.log("2access", access);

      let isOk = true;
      getUser()
        .then((response) => {
          console.log("responce", response);
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((user) => {
          console.log("user", user);

          if (isOk) {
            setUser(user);
          }
        })
        .finally(() => {
          console.log("finally");
          setIsReady(true);
        });
    }
  }, []);

  const mode = useSelector(
    (state: TState) => state.modeReducer.mode
  );

  return (
    <>
      {isReady ? (
        <div className={mode ? "lightApp" : "App"}>
          <BrowserRouter>
            <Context.Provider
              value={{
                user: user,
                setUser: setUser,
              }}
            >
              <RootRouter />
            </Context.Provider>
          </BrowserRouter>
        </div>
      ) : (
        <div className="loader">
          <img src={loader} />
        </div>
      )}
    </>
  );
}

export default App;
