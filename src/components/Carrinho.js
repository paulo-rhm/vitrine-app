// src/components/Carrinho.js
import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Carrinho = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalCarrinho = cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);

  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Carrinho Vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <h4>{item.nome}</h4>
                  <p>Preço: R${item.preco.toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => decreaseQuantity(item)}>
                  <FaMinus />
                </button>
                <span>{item.quantidade}</span>
                <button onClick={() => increaseQuantity(item)}>
                  <FaPlus />
                </button>
                <button onClick={() => removeFromCart(item)}>Remover</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: R${totalCarrinho.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrinho;
