import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Cards from './Cards';
import logo from '../images/logo.png';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Styles/carroselAlice.css';

function CarroselAlice() {
  const handleOnDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  return (
    <section>
      <AliceCarousel
        responsive={responsive}
        autoPlayInterval={1000}
        autoPlayDirection="rtl"
        autoPlay
        fadeOutAnimation
        playButtonEnabled
        disableAutoPlayOnAction
      >
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
        <Cards text="teste" img={logo} onDragStart={handleOnDragStart} />
      </AliceCarousel>
    </section>
  );
}

export default CarroselAlice;
