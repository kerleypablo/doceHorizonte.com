/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './Styles/CardStyle2.css';

function CardStyle2({
  textifo = 'text', titulo = 'titulo', img = '', link = '',
}) {
  return (
    <figure className="snip1477">
      <img src={img} alt="sample38" />
      <div className="title">
        <div>
          <h2>{titulo}</h2>
          <h4>Saiba Mais</h4>
        </div>
      </div>
      <figcaption>
        <p>{textifo}</p>
      </figcaption>
      <a href={link} />
    </figure>
  );
}

CardStyle2.propTypes = {
  textifo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default CardStyle2;
