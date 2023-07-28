// src/components/Vitrine.js
import React from 'react';
import Produto from './Produto';

const Vitrine = ({ addToCart }) => {
  const produtos = [

    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Descrição do Produto 1',
      preco: 19.99,
      imagem: 'images/produto1.jpg',
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Descrição do Produto 2',
      preco: 29.99,
      imagem: 'images/produto2.jpg',
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Descrição do Produto 3',
      preco: 39.99,
      imagem: 'images/produto3.jpg',
    },
    {
      id: 4,
      nome: 'Produto 4',
      descricao: 'Descrição do Produto 4',
      preco: 50.00,
      imagem: 'images/produto4.jpg',
    },
    {
      id: 5,
      nome: 'Produto 5',
      descricao: 'Descrição do Produto 5',
      preco: 39.99,
      imagem: 'images/produto5.jpg',
    },
    {
      id: 6,
      nome: 'Produto 6',
      descricao: 'Descrição do Produto 6',
      preco: 49.99,
      imagem: 'images/produto6.jpg',
    },
    {
      id: 7,
      nome: 'Produto 7',
      descricao: 'Descrição do Produto 7',
      preco: 30.99,
      imagem: 'images/produto7.jpg',
    },
  ];

  return (
    <div className="vitrine">
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          addToCart={addToCart}
        />
      ))}
    </div>
    
  );
};

export default Vitrine;
