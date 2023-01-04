import { useNavigate } from "react-router-dom";
import { InfoTemplate } from "../../components/InfoTemplate";
import { Header } from "../../components/Layouts/Header/header";

export const RegistrSuccess = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
        <InfoTemplate
          title={"Registraition Confirmation"}
          body={`Please activate your account with 
        the activation link in the email
        test@gmail.com
        Please, check your email`}
          textButton={"Home"}
          onClick={
            () => {
              navigate('/')
            }
          }
        />
    </div>
  );
};