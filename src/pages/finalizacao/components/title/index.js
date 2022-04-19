import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  cabecalho: {
    fontSize: 24,
    color: '#546e7a',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
}));
const TitleNome = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.cabecalho}>{text}</Typography>;
};

export default TitleNome;
