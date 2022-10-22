import React from 'react';
import ImgCarrosel from './imgCarrosel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarroselAlice from './CarrocelAlice';
import './Styles/bodyHome.css';

function BodyHome() {
  return (
    <section>
      <ImgCarrosel />
      <div className="producstCarrosel">
        <CarroselAlice />
      </div>
    </section>
  );
}

export default BodyHome;
