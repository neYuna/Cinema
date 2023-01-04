import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../components/fetch/registeruser";
import { InfoTemplate } from "../../components/InfoTemplate";
import { Header } from "../../components/Layouts/Header/header";

export const EmailConfirm = () =>{
  const navigate = useNavigate()
  const params = useParams()
  useEffect(() => {
    if(params.uid && params.token){
      activateUser(params.uid, params.token);
  
    }
  
  })
    return(
      <div>
        <Header />
          <InfoTemplate
            title={"Success"}
            body={`Email confirmed.
            Your registraition is now completed`}
            textButton={"Login"} onClick={
              () => {            navigate('/login')
            }
            }         
          />
      </div>
    )
  }