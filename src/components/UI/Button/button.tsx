import { type } from "os";
import { useSelector } from "react-redux";
import { IMode } from "../../../store/reducers/modeReducer";
import { TState } from "../../../store/store";
import style from "./style.module.css";



interface IButton {
  text: string;
  onClick: () => void;
  type?: string;
}


export const Button = ({ text, onClick }: IButton) => {
  const mode = useSelector(
    (state: TState) => state.modeReducer.mode
  );



  return (
    <button className={mode? style.lightButton : style.button} onClick={onClick}>
      {text}
    </button>
  );
};
