import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  adicionar: {
    width: 237,
    height: 36,
    bottom: 20,
    borderRadius: 4,
    backgroundColor: '#019cdf',
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    '&:hover': {
      backgroundColor: '#1976d2',
      borderColor: '#1976d2',
      boxShadow: 'none',
    },
  },
}));

const ButtonAdicionar = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.adicionar} onClick={onClick}>
        ADICIONAR
      </Button>
    </div>
  );
};

export default ButtonAdicionar;
