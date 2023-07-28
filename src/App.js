import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Vitrine from './components/Vitrine';
import Carrinho from './components/Carrinho';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const existItem = cartItems.find((item) => item.id === produto.id);

    if (existItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...produto, quantidade: 1 }]);
    }
  };

  const removeFromCart = (produto) => {
    setCartItems(cartItems.filter((item) => item.id !== produto.id));
  };

  const increaseQuantity = (produto) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decreaseQuantity = (produto) => {
    if (produto.quantidade > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} />
      <div className="container">
        <Vitrine addToCart={adicionarAoCarrinho} />
        <Carrinho
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default App;
