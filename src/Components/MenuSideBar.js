import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Styles/MenuLateral.css';

function MenuSideBar({
  titulo, link1, link2, link3,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar">
      <button
        className="sidebarMenuButton"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {titulo}
      </button>
      {isOpen && (
        <ul>
          <li className="linksideBar">
            <Link className="buttonLinksidebar" to="/menu1/submenu1">{link1}</Link>
          </li>
          <li className="linksideBar">
            <Link className="buttonLinksidebar" to="/menu1/submenu2">{link2}</Link>
          </li>
          <li className="linksideBar">
            <Link className="buttonLinksidebar" to="/menu1/submenu3">{link3}</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MenuSideBar;

MenuSideBar.propTypes = {
  titulo: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string.isRequired,
};
