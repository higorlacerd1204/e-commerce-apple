import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  descricao: {
    fontSize: 18,
    color: '#546e7a',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
  valor: {
    color: '#448aff',
  },
}));
const TextDescricao = ({ valor }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.descricao}>
      Sua compra no valor <span className={classes.valor}>{valor}</span> <br />
      foi finalizada com sucesso
    </Typography>
  );
};

export default TextDescricao;
