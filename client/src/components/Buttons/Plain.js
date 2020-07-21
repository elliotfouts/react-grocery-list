import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
})

const Plain = ({icon, children, onClick, style}) => {
  const classes = useStyles();

  return (
      <div onClick={onClick}>
        <Button 
          style={style}
          className={classes.root}
          variant='text'
          endIcon={icon}
        >
          {children}
        </Button>
      </div>
  )
}

export default Plain;