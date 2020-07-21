import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    
  }
})

const PlainButton = ({children, onClick}) => {
  const classes = useStyles();

  return (
      <div onClick={onClick}>
        <Button 
          className={classes.root}
          variant='text'
        >
          {children}
        </Button>
      </div>
  )
}

export default PlainButton;
