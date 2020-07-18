import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#007370',
    color: '#FFFFFF'
  }
})

const FilledButton = ({icon, children, onClick}) => {
  const classes = useStyles();

  return (
      <div onClick={onClick}>
        <Button 
          className={classes.root}
          variant='contained'
          endIcon={icon}
        >
          {children}
        </Button>
      </div>
  )
}

export default FilledButton;