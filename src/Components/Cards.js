import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Styles/Cards.css';

function Cards({ textifo = 'text', img = '', link = '' }) {
  const tela = window.screen.width;
  let valCard = '';
  if (tela <= 600) {
    valCard = '48vw';
  } else valCard = '16vw';

  return (
    <Card className="card" style={{ width: valCard }}>
      <Card.Img className="cardImg" variant="top" src={img} />
      <Card.Body className="cardBody">
        <Card.Text className="cardTitle">{ textifo }</Card.Text>
        <Link to={link}>
          <Button variant="primary">saiba mais</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  textifo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Cards;
