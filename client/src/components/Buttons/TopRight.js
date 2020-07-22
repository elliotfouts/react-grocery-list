import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  }
})

const TopRight = ({children, onClick, style}) => {
  const classes = useStyles();
  return (
        <Button
          className={classes.root}
          variant='text'
          onClick={onClick}
          style={style}
        >
          {children}
        </Button>
  )
}

export default TopRight;