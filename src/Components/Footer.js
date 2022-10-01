import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Cards from './Cards';
import './Styles/footer.css';
import logo from '../images/doces-em-goiania-lugares-para-provar-verdadeiras-delicias-9.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function Footer() {
  return (
    <footer>
      <div className="simbolo" />
      <div className="roleta">
        <Carousel className="carosel" centerMode width={950} centerSlidePercentage={20} infiniteLoop>
          <Cards texto="teste" img={logo} />
          <Cards texto="teste" img={logo} />
          <Cards texto="teste" img={logo} />
          <Cards texto="teste" img={logo} />
          <Cards texto="teste" img={logo} />
          <Cards texto="teste" img={logo} />
        </Carousel>
      </div>
    </footer>
  );
}