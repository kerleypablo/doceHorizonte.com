import React from 'react';
import './Styles/footer.css';
import { AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="blackLine" />
      <div className="boxredes">
        <div className="logo_footer">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p>- DOCE HORIZONTE -</p>
        </div>
        <div>
          <a href="https://wa.me/message/4YAMNDLSQNXOJ1">
            <AiOutlineWhatsApp size={35} color="antiquewhite" />
          </a>
          <a href="https://instagram.com/docehorizontedh?igshid=YmMyMTA2M2Y=">
            <AiFillInstagram size={35} color="antiquewhite" />
          </a>
        </div>
      </div>
    </footer>
  );
}
