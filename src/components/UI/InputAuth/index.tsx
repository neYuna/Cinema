import { ChangeEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../../store/store";
import style from "./style.module.css";

interface IAuthInput {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  error?: string;
  title?: string;
  type?: string;
}

export const InputAuth = (props: IAuthInput) => {
  const mode = useSelector(
    (state: TState) => state.modeReducer.mode
  );

  const [password, setPassword] = useState(props.type);

  const changeType = () => {
  if(password === 'password'){
    setPassword('text')
  } else{
    setPassword('password')
  }
  };

  return (
    <div className={style.mainInput}>
      <p className={style.title}>{props.title}</p>
      <input
        className={`${mode ? style.lightAuthInput : style.authInput} ${
          props.error ? style.error : ""
        }`}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={password}
      />
      {props.error ? <p className={style.text}>{props.error}</p> : <p className={style.text}></p>}

      <div>
        {props.type ? (
          <span
            onClick={changeType}
            className={password === "password" ? style.closedEye : style.openedEye}
          ></span>
        ) : null}
      </div>
    </div>
  );
};
