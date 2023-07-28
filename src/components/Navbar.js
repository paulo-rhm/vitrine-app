import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantidade, 0);

  return (
    <nav>
      <span className="navbar-left">All mar</span>
      <ul className="navbar-right">
        <li>
          <a href="#">Produtos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">
            <FaShoppingCart /> {totalItems}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
