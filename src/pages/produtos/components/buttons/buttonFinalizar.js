import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  finalizar: {
    position: 'relative',
    marginBottom: 60,
    marginTop: 110,
    width: 186,
    height: 40,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: '#ff9800',
    borderColor: '##ff9800',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    '&:hover': {
      backgroundColor: '#f57c00',
      borderColor: '##f57c00',
      boxShadow: 'none',
    },
  },
}));

const ButtonFinalizar = ({ disabled }) => {
  const classes = useStyles();

  return (
    <div className="row">
      <div className="col-12">
        <Button
          variant="contained"
          color="primary"
          className={classes.finalizar}
          disabled={disabled}
          type="submit"
        >
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  );
};

export default ButtonFinalizar;
