import { ChangeEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../../store/store";
import style from "./style.module.css";

interface IInput {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: IInput) => {
  const mode = useSelector(
    (state: TState) => state.modeReducer.mode
  );

  return (
    <input
      className={mode? style.lightInput : style.input}
      onChange={props.onChange}
      value={props.value}
      placeholder="Search for films..."
    />
  );
};
