import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './components/buttons/counterSlice';
import { Product, TitleProdutos, TitleDadosCliente, Line, Form, Total } from './components';
import produtos from './data/produtos';

const Produtos = () => {
  const [valorTotal, setValorTotal] = useState(0);
  const qtdProduto = useSelector(selectCount);
  const handleAddProduto = (produto) => setValorTotal(produto * qtdProduto + valorTotal);
  const validacaoTotal = () => !valorTotal;

  const desconto = (descontoValor, prctDesconto) =>
    descontoValor - descontoValor * `0.${prctDesconto}`;

  const valorParcelado = (valorProd, qtdParcela) => valorProd / qtdParcela;

  const limparCarrinho = () => {
    setValorTotal(0);
  };

  localStorage.setItem(
    'valorTotal',
    valorTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
  );

  return (
    <div className="container">
      <div className="row">
        <div class="col-12">
          <TitleProdutos text="Produtos" />
          <Line />
        </div>
      </div>
      <div className="row">
        {produtos.map((produto) => (
          <Product
            image={produto.image}
            titulo={produto.titulo}
            valor={produto.valor}
            quantidadeParcela={produto.quantidadeParcela}
            porcentagemDesconto={produto.porcentagemDesconto}
            valorDesconto={desconto(produto.valor, produto.porcentagemDesconto)}
            valorParcela={valorParcelado(produto.valor, produto.quantidadeParcela)}
            qtdProduto={qtdProduto}
            onClick={() => handleAddProduto(produto.valor)}
          />
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <TitleDadosCliente text="Dados do Cliente" />
          <Line />
        </div>
      </div>
      <Form disabled={validacaoTotal()} onClick={() => limparCarrinho()} />
      <Total valor={valorTotal} quantidadeParcela={produtos[0].quantidadeParcela} />
    </div>
  );
};

export default Produtos;
