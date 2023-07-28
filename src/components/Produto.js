import React from 'react';

const Produto = ({ produto, addToCart }) => {
  return (
    <div className="produto-card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Produto;
