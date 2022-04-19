import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  total: {
    fontSize: 24,
    fontWeight: 700,
    height: 60,
    marginTop: -190,
    position: 'absolute',
  },
  parcela: {
    fontSize: 12,
    fontWeight: 700,
    marginTop: -160,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    display: 'flex',
  },
}));

const Total = ({ valor, quantidadeParcela }) => {
  const classes = useStyles();
  const parcelado = valor / 12;

  return (
    <div className="row">
      <div className={`col-12 ${classes.column}`}>
        <p className={classes.total} fullwidth>{`Total: ${valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`}</p>
        <p
          className={classes.parcela}
          fullwidth
        >{`Em até ${quantidadeParcela}x de R$ ${parcelado.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`}</p>
      </div>
    </div>
  );
};

export default Total;
