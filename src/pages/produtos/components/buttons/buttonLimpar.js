import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  adicionar: {
    width: 186,
    height: 40,
    marginTop: -100,
    borderRadius: 4,
    borderColor: '#019cdf',
    fontSize: 14,
    color: '#019cdf',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    '&:hover': {
      borderColor: '#1976d2',
      color: '#1976d2',
      boxShadow: 'none',
    },
  },
}));

const ButtonLimpar = ({ onClick, disabled }) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        href="#outlined-buttons"
        color="primary"
        className={classes.adicionar}
        onClick={onClick}
        disabled={disabled}
      >
        LIMPAR CARRINHO
      </Button>
    </div>
  );
};

export default ButtonLimpar;
