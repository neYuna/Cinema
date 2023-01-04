import { ChangeEventHandler, FormEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../App";
import { getUser, login } from "../../fetch/registeruser";
import { Button } from "../../UI/Button/button";
import { InputAuth } from "../../UI/InputAuth"
import { validateRequired } from "../../utils/validation";
import style from './style.module.css'

export const LoginForm = () => {

  const navigate = useNavigate()
  const {setUser} = useContext(Context)
  const [email, setEmail] = useState("");
  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let isOk = true;
    login(email, password)
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((json) => {
        if (isOk) {
          localStorage.setItem("access", json.access);
          localStorage.setItem("refresh", json.refresh);
          getUser()
            .then((responce) => {
              return responce.json();
            })
            .then((user) => {
              setUser(user);
              console.log(user);
              navigate("/main");
            });

          console.log(json);
        } else {
        }
      });
  };

  return(
    <div className={style.mainLogin}>
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <p>Email</p>
        <InputAuth
            value={email} onChange={handlerEmail} placeholder={""}          
        />
      </div>
      <div style={{marginBottom: '20px'}}>
        <p>Password</p>
        <InputAuth
        type="password"
            value={password} onChange={handlerPassword} placeholder={""}        
        />
      </div>
      <Button text={"Log In"} onClick={() => {}}/>
      </form>
      </div>
  )
}