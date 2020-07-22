import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  paddedContainer: {
    padding: '2rem',
  }
})

export const PaddedContainer = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.paddedContainer}>
      {children}
    </div>
  )
}