import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilmsList } from "../../components/FilmList/filmlist";
import { Footer } from "../../components/Layouts/Footer/footer";
import { Header } from "../../components/Layouts/Header/header";
import { SingleGenre } from "../../components/SingleGenre/singleGenre";
import { Title } from "../../components/Title";
import { Button } from "../../components/UI/Button/button";

export const SingleGenrePage = () => {

  return (
    <>
      <Header />
      <SingleGenre/>
      <Footer />
    </>
  );
};
