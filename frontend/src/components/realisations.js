import React from 'react';
import {useRef} from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import template1 from '../img/portfolio/Agences/t_vesperr.png'
import template2 from '../img/portfolio/Nettoyage/t_anwa.png'
import template3 from '../img/portfolio/Nettoyage/t_cleanixer.png'
import template4 from '../img/portfolio/Nettoyage/t_viscous.png'
import template5 from '../img/portfolio/Restaurants/t_delicious.png'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardPortfolio = ({ title, description, src }) => {
  return (
    <Card className="mt-6 w-96 shadow-xl xl:hover:scale-105 duration-200">
      <CardHeader color="blue-gray" className="relative h-96">
        <img
          src={src}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="text-center text-xl font-bold">
          {title}
        </Typography>
        {/* <Typography>
          {description}
        </Typography> */}
      </CardBody>
      <CardFooter className="pt-0 text-center">
        <Button className="poppins font-semiboldtext-md text-white bg-[#45008B] duration-300 hover:bg-[#4f46e5]">
          <a target="_blank" href={src}>Découvrir</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

const Realisations = () => {

  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    arrows:false,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5 py-5 bg-gradient-to-r from-[#45008B] to-[#63179C]" data-aos="fade-up" data-aos-duration="1300">
      <div className="max-w-xl mt-5 mb-6 mx-auto text-center lg:max-w-3xl md:mb-6">
            <p className="text-base font-semibold leading-6 text-white uppercase mb-2">
                CHOISISSEZ VOTRE DESIGN
            </p>
            <h2 className="max-w-lg mb-6 font-bold text-white dark:text-white text-3xl sm:text-4xl mx-auto">
                Notre PORTFOLIO
            </h2>
            <p className="poppins text-base text-white md:text-lg px-2">
              Chez Nocturna, nous mettons en avant des designs web à la fois modernes et professionnels, offrant à nos clients une vitrine en ligne qui reflète leur excellence et leur crédibilité.
            </p>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {/* Remplace les éléments suivants avec les détails de tes projets */}
        <div className="flex justify-center items-center h-full my-5">
          <div className="flex justify-center items-center">
            <CardPortfolio title="Vesperr" description="C'est un test" src={template1} />
          </div>
        </div>

        <div className="flex justify-center items-center h-full  my-5">
          <div className="flex justify-center items-center">
            <CardPortfolio title="Anwa" description="C'est un test" src={template2}/>
          </div>
        </div>

        <div className="flex justify-center items-center h-full  my-5">
          <div className="flex justify-center items-center">
            <CardPortfolio title="Cleanixer" description="C'est un test" src={template3}/>
          </div>
        </div>
        <div className="flex justify-center items-center h-full  my-5">
          <div className="flex justify-center items-center">
            <CardPortfolio title="Viscous" description="C'est un test" src={template4}/>
          </div>
        </div>
        <div className="flex justify-center items-center h-full  my-5">
          <div className="flex justify-center items-center">
            <CardPortfolio title="Restaurantly" description="C'est un test" src={template5}/>
          </div>
        </div>
        {/* Ajoute autant d'éléments que nécessaire pour tous tes projets */}
      </Slider>
      <div className="custom-arrows my-5">
        <button className="prev" onClick={goToPrev}>
          {'<'}
        </button>
        <button className="next" onClick={goToNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Realisations;