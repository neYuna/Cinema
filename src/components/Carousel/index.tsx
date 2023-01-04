import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import style from "./style.module.css";
import { ICard } from "../../interface.ts/postcard";
export const Carusel = () => {
  const carouselData = [
    {
      src: "https://a-static.besthdwallpaper.com/miguel-with-his-great-grandfather-hector-wallpaper-2560x1080-13985_14.jpg",
      title: "Coco",
      text: `Despite his family’s baffling
      generations-old ban on music, Miguel dreams of becoming an
      accomplished musician like his idol, Ernesto de la Cruz.
      Desperate to prove his talent...`,
      href: "http://localhost:3000/selected/679486",
    },
    {
      src: "https://images.hdqwalls.com/download/black-panther-wakanda-forever-4k-wx-2560x1080.jpg",
      title: "Black Panther",
      text: `King TChalla returns home from America to the reclusive, technologically advanced African
      nation of Wakanda to serve as his country's new leader...`,
      href: "http://localhost:3000/selected/623250",
    },

    {
      src: "https://images.hdqwalls.com/download/dunkirk-2017-9b-2560x1080.jpg",
      title: "Dunkirk",
      text: `The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, 
      who were cut off and surrounded by the German army from 
      the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.`,
      href: "http://localhost:3000/selected/931677",
    },

    {
      src: "https://images.hdqwalls.com/download/the-shape-of-water-5k-oa-2560x1080.jpg",
      title: "The Shape of Water",
      text: `An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute
       janitor working at a lab falls in love with an amphibious man being held captive there and 
       devises a plan to help him escape.`,
      href: "http://localhost:3000/selected/977743",
    },
    {
      src: "https://images.hdqwalls.com/download/avatar-5k-k8-2560x1080.jpg",
      title: "Avatar",
      text: `In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a 
      unique mission, but becomes torn between following orders and protecting an alien civilization.`,
      href: "http://localhost:3000/selected/251733",
    },
    {
      src: "https://images.hdqwalls.com/download/gipsy-avenger-pacific-rim-5k-an-2560x1080.jpg",
      title: "Pacific Rim: Uprising",
      text: "What is this movie about: It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history...",
      href: "http://localhost:3000/selected/721154",
    },
    {
      src: "https://images.hdqwalls.com/download/john-wick-movie-4k-25-2560x1080.jpg",
      title: "John Wick",
      text: `Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.`,
      href: "http://localhost:3000/selected/762738",
    },
    {
      src: "https://m.media-amazon.com/images/M/MV5BOTQxMTI0MjczNl5BMl5BanBnXkFtZTgwMTI0MjQxNTM@._V1_.jpg",
      title: "Ready Player One",
      text: `When the creator of a popular video
      game system dies, a virtual contest is created to compete for
      his fortune.`,
      href: "http://localhost:3000/selected/538225",
    },
  ];
  return (
    <div className={style.caurusel}>
      <Carousel>
        {carouselData.map((item) => {
          return (
            <Carousel.Item>
              <div className={style.mainImg}>
                <img className={style.image} src={item.src} alt="Image One" />
              </div>

              <Carousel.Caption>
                <div className={style.mainText}>
                  <h3 className={style.title}>{item.title}</h3>
                  <p className={style.text}>{item.text}</p>
                  <a className={style.link} href={item.href}>
                   Смотреть
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
