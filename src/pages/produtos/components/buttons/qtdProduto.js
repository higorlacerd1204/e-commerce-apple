import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(() => ({
  botoes: {
    marginTop: 10,
  },
  contador: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: -30,
    color: '#424242',
  },
  addButton: {
    bottom: 34,
    marginLeft: 197,
  },
}));

const QtdProduto = ({ qtdProduto }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className="row">
      <div className="col-12">
        <div className={classes.botoes}>
          <Fab
            disabled={qtdProduto === 0}
            aria-label="Remove"
            onClick={() => dispatch(decrement())}
            size="small"
          >
            <RemoveIcon />
          </Fab>
          <span className={classes.contador} min="0" default="0">
            {qtdProduto}
          </span>
          <Fab
            aria-label="Adiciona"
            onClick={() => dispatch(increment())}
            size="small"
            className={classes.addButton}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default QtdProduto;
