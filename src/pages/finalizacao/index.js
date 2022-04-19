import React from 'react';
import Paper from '@material-ui/core/Paper';
import { TitleNome, TextDescricao, ButtonNovaCompra } from './components';
import { makeStyles } from '@material-ui/core/styles';
import finalizacao from './data/finalizacao';

const useStyles = makeStyles(() => ({
  geral: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#eceff1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 178,
    height: 145,
    marginTop: 40,
  },
  paper: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
    margin: 'auto',
  },
}));

const Finalizacao = () => {
  const classes = useStyles();
  const valor = localStorage.getItem('valorTotal');
  const nomeCliente = localStorage.getItem('nomeCliente');

  return (
    <div className={classes.geral}>
      <Paper elevation={1} className={classes.paper}>
        <TitleNome text={`${nomeCliente},`} />
        <TextDescricao valor={valor} />
        {finalizacao.map((final) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img src={final.image} className={classes.image}></img>
        ))}
        <ButtonNovaCompra />
      </Paper>
    </div>
  );
};

export default Finalizacao;
