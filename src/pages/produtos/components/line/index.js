import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  linha: {
    width: '100%',
    display: 'flex',
    height: 1,
    backgroundColor: '#eceff1',
    marginBottom: 40,
    marginTop: 5,
    position: 'relative',
  },
}));

const Line = () => {
  const classes = useStyles();
  return <p className={classes.linha}></p>;
};
export default Line;
