import { Button } from "../UI/Button/button";
import style from './style.module.css'

export interface ITemplate {
  title: string;
  body: string;
  textButton: string;
  onClick: () => void;
}

export const InfoTemplate = ({title, body, textButton, onClick}: ITemplate) => {
  return(
    <div className={style.infoMain}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}> {body}</p>
      <Button text={textButton} onClick={onClick} />
    </div>
  )
}