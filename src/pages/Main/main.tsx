import { AllFilms } from "../../components/AllFilms/allfilms";
import { Carusel } from "../../components/Carousel";
import { Footer } from "../../components/Layouts/Footer/footer";
import { Header } from "../../components/Layouts/Header/header";
import { Tab } from "../../components/UI/Tabs/tabs";

export const Main = () => {
  return (
    <>
      <Header />
      <Carusel />
      <Tab />
      <Footer />
    </>
  );
};
