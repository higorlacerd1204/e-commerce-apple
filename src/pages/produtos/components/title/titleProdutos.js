import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  cabecalho: {
    fontSize: 24,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    marginTop: 90,
    height: 40,
  },
}));
const TitleProdutos = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.cabecalho}>{text}</Typography>;
};

export default TitleProdutos;
