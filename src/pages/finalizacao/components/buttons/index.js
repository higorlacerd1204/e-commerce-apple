import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  finalizar: {
    width: 230,
    height: 40,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: '#ff9800',
    borderColor: '#ff9800',
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 10,
    fontFamily: 'Open Sans',
    '&:hover': {
      backgroundColor: '#f57c00',
      borderColor: '#f57c00',
      boxShadow: 'none',
    },
  },
}));

const ButtonNovaCompra = () => {
  const classes = useStyles();
  const history = useHistory();

  const telaProdutos = () => {
    history.push('/produtos');
  };

  return (
    <div>
      <form onSubmit={() => telaProdutos()}>
        <Button variant="contained" color="primary" className={classes.finalizar} type="submit">
          INICIAR NOVA COMPRA
        </Button>
      </form>
    </div>
  );
};

export default ButtonNovaCompra;
