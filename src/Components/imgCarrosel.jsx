import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/imgcarrosel.css';
import img1 from '../images/main_shutterstock_394680466.jpg';
import img2 from '../images/kit-festa-02-p3yx222yajerqtj0dde44k26sqit295rpbhth8dy1g.jpg';
import img3 from '../images/doces-em-goiania-lugares-para-provar-verdadeiras-delicias-9.jpg';

function ImgCarrosel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="img1"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=" titulo_img">Bolos Decorados</h3>
          <p className="text_img">Bolos decorados de Todos os tamanhos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img1"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="titulo_img">Kit Festas</h3>
          <p className="text_img">kit festas com bolos doces e salgados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img1"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className=" titulo_img">Doces</h3>
          <p className="text_img">
            Doces variados e deliciosos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarrosel;
