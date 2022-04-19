/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAdicionar from '../buttons/buttonAdd';
import QtdProduto from '../buttons/qtdProduto';
import { useDispatch } from 'react-redux';
import { zerar } from '../buttons/counterSlice';

const useStyles = makeStyles(() => ({
  paper: {
    marginBottom: 50,
    minHeight: 390,
    '&:hover': {
      borderRadius: 4,
      boxShadow: '0 0 1em #eceff1',
      backgroundColor: '#ffffff',
      border: '1px solid #eceff1',
    },
  },
  sobeDescricao: {
    position: 'absolute',
    top: 135,
    width: 268.8,
    height: 244,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '0 15px',
  },
  image: {
    width: 224,
    height: 224,
    backgroundColor: '#cfd8dc',
    marginTop: 25,
  },
  titulo: {
    fontSize: 14,
    width: 224,
    marginTop: 15,
  },
  valor: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 700,
  },
  parcelado: {
    fontSize: 12,
    color: '#90a4ae',
    fontWeight: 400,
    marginTop: 10,
  },
  valorDesconto: {
    fontSize: 12,
    color: '#90a4ae',
    fontWeight: 400,
  },
  button: {
    display: 'none',
  },
  exibeButton: {
    display: 'inline-block',
  },
  alinhaProduto: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Product = ({
  image,
  titulo,
  valor,
  quantidadeParcela,
  porcentagemDesconto,
  valorDesconto,
  valorParcela,
  qtdProduto,
  onClick,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [descricaoStyle, setDescricaoStyle] = useState(classes.descricao);
  const [buttonStyle, setButtonStyle] = useState(classes.button);

  const formatValor = (valorFormatado) =>
    valorFormatado.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <div
      className={`col-12 col-sm-6 col-lg-4 col-xl-3 ${classes.paper}`}
      onMouseEnter={() =>
        setDescricaoStyle(classes.sobeDescricao) || setButtonStyle(classes.exibeButton)
      }
      onMouseLeave={() =>
        setDescricaoStyle(classes.descricao) || setButtonStyle(classes.button) || dispatch(zerar())
      }
    >
      <div className={classes.alinhaProduto}>
        <img src={image} className={classes.image} />
        <div className={descricaoStyle}>
          <div className={classes.titulo}>{titulo}</div>
          <div className={classes.valor}>{formatValor(valor)}</div>
          <div className={classes.parcelado}>{`Em até ${quantidadeParcela}x de ${formatValor(
            valorParcela,
          )}`}</div>
          <div className={classes.valorDesconto}>{`${formatValor(
            valorDesconto,
          )} à vista (${porcentagemDesconto}% de desconto)`}</div>
          <div className={buttonStyle}>
            <QtdProduto qtdProduto={qtdProduto} />
            <ButtonAdicionar onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
