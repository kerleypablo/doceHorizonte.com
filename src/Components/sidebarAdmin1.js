import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Styles/MenuLateral.css';

function SidebarAdmin({
  titulo, link1, link2, link3, link4, link5, numLinks,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebarADM">
      <button
        className="sidebarMenuButtonADM"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {titulo}
      </button>
      {isOpen && (
        <ul>
          { numLinks >= 1 ? (
            <li className="linksideBarADM">
              <Link className="buttonLinksidebarADM" to="/menu1/submenu1">{link1}</Link>
            </li>
          ) : null }
          { numLinks >= 2 ? (
            <li className="linksideBarADM">
              <Link className="buttonLinksidebarADM" to="/menu1/submenu1">{link2}</Link>
            </li>
          ) : null }
          { numLinks >= 3 ? (
            <li className="linksideBarADM">
              <Link className="buttonLinksidebarADM" to="/menu1/submenu1">{link3}</Link>
            </li>
          ) : null }
          { numLinks >= 4 ? (
            <li className="linksideBarADM">
              <Link className="buttonLinksidebarADM" to="/menu1/submenu1">{link4}</Link>
            </li>
          ) : null }
          { numLinks >= 5 ? (
            <li className="linksideBarADM">
              <Link className="buttonLinksidebarADM" to="/menu1/submenu1">{link5}</Link>
            </li>
          ) : null }
        </ul>
      )}
    </div>
  );
}

export default SidebarAdmin;

SidebarAdmin.propTypes = {
  titulo: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string.isRequired,
  link4: PropTypes.string.isRequired,
  link5: PropTypes.string.isRequired,
  numLinks: PropTypes.number.isRequired,
};
