import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Cards2 from './CardStyle2';
import img1 from '../images/bento1.jpeg';
import img2 from '../images/boloNkaed.jpeg';
import img3 from '../images/browne2.jpeg';
import img4 from '../images/caixabrig.jpeg';
import img5 from '../images/brigaderiros rosa.jpeg';
import img6 from '../images/brownelado.jpeg';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Styles/carroselAlice.css';
import 'animate.css';

function CarroselAlice() {
  const handleOnDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  return (
    <section className="animate__animated animate__fadeIn">
      <AliceCarousel
        responsive={responsive}
        autoPlayInterval={1000}
        autoPlayDirection="rtl"
        autoPlay
        fadeOutAnimation
        playButtonEnabled
        disableAutoPlayOnAction
      >
        <Cards2 text="teste" img={img1} titulo="Bentos" onDragStart={handleOnDragStart} />
        <Cards2 text="teste" img={img2} titulo="Bolos" onDragStart={handleOnDragStart} />
        <Cards2 text="teste" img={img3} titulo="Brownes" onDragStart={handleOnDragStart} />
        <Cards2 text="teste" img={img4} titulo="Presentes" onDragStart={handleOnDragStart} />
        <Cards2 text="teste" img={img5} titulo="Doces" onDragStart={handleOnDragStart} />
        <Cards2 text="teste" img={img6} titulo="Palhas" onDragStart={handleOnDragStart} />
      </AliceCarousel>
    </section>
  );
}

export default CarroselAlice;
