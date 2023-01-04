import { Main } from "../pages/Main/main";
import { Route, Routes } from "react-router-dom";
import { SelectedPage } from "../pages/Main/SelectedFilm";
import { Registration } from "../pages/Registration";
import { Login } from "../pages/Login";
import { EmailConfirm } from "../pages/EmailConfirm";
import { RegistrSuccess } from "../pages/Activation";
import { SingleGenrePage } from "../pages/SingleGenrePage";
import { Landing } from "../components/landing";

export const RootRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />}></Route>
    <Route path="/Main" element={<Main />}></Route>
    <Route path="/selected/:filmId" element={<SelectedPage />}></Route>
    <Route path="/registration" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/registrsuccess" element={<RegistrSuccess />}></Route>
    <Route path="/activate/:uid/:token" element={<EmailConfirm />}></Route>
    <Route path="/genres/:genre" element={<SingleGenrePage />}></Route>
  </Routes>
);
