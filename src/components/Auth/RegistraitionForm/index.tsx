import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../fetch/registeruser";
import { Button } from "../../UI/Button/button";
import { InputAuth } from "../../UI/InputAuth";
import {
  confirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validation";
import style from "./style.module.css";

export const RegistraitionForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [userError, setUserError] = useState("");

  const handlerUsername: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value);
    error ? setUserError(error) : setUserError("");

    setUsername(event.target.value);
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    error ? setEmailError(error) : setEmailError("");
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    error ? setPasswordError(error) : setPasswordError("");
    setPassword(event.target.value);
  };

  const [password2, setPassword2] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const handlerPassword2: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = confirmPassword(password, event.target.value);
    error ? setPassword2Error(error) : setPassword2Error("");
    setPassword2(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const [error, setError] = useState("");

  const onClickLogin = () => {
    setError("");
    const errors = {
      username: validateRequired(username),
      email: validateEmail(email),
      password: validatePassword(password),
      confirm: confirmPassword(password, password2),
    };

    setUserError(errors.username);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setPassword2Error(errors.confirm);

    const isValidForm = Object.values(errors).every((error) => error === "");

    if (isValidForm) {
      const promise = RegisterUser(username, email, password);

      let isOk = true;
      promise
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((json) => {
          console.log(json);
          if (isOk) {
            //on success
            navigate("/");
          } else {
            //on error
            if (json?.email?.includes("user with this Email already exists.")) {
              setError("User with this Email already exists");
            }
            if (
              json?.username?.includes(
                "A user with that username already exists"
              )
            ) {
              setError("A user with that username already exists");
            }
            if (
              json?.password?.includes(
                "This password is too short. It must contain at least 8 characters."
              )
            ) {
              setError(
                "This password is too short. It must contain at least 8 characters."
              );
            }
            if (json?.password?.includes("This password is too common.")) {
              setError("This password is too common.");
            }
            if (
              json?.password?.includes("This password is entirely numeric.")
            ) {
              setError("This password is entirely numeric.");
            }
          }
        });
    }
  };

  return (
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.spaceInput}>
            <p>Username</p>
            <InputAuth
              value={username}
              onChange={handlerUsername}
              placeholder={"Enter your username"}
              error={userError}
            />
          </div>
          <div className={style.spaceInput}>
            <p>Email</p>
            <InputAuth
              value={email}
              onChange={handlerEmail}
              placeholder={"Enter your email"}
              error={emailError}
            />
          </div>
          <div className={style.spaceInput}>
            <p>Password</p>
            <InputAuth
              value={password}
              onChange={handlerPassword}
              placeholder={"Create password"}
              error={passwordError}
              type={"password"}
            />
          </div>
          <div className={style.spaceInput}>
            <p>Confirm Password</p>
            <InputAuth
              value={password2}
              onChange={handlerPassword2}
              placeholder={"Confirm your password"}
              error={password2Error}
              type={"password"}

            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <Link className={style.greenLink} to={"/registrsuccess"}>
            <Button text={"Sign Up"} onClick={onClickLogin} />
          </Link>
          <p className={style.title}>
            If you have an account, you can
            <Link className={style.link} to={"/login"}>
              <strong>login</strong>
            </Link>
          </p>
        </form>
      </div>
  );
};
