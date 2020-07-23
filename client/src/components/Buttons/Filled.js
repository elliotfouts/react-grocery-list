import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    backgroundColor: Palette.Green,
    color: Palette.White,
    marginBottom: 10
  }
})

const FilledButton = ({icon, children, onClick, fullWidth}) => {
  const classes = useStyles();

  return (
      <div onClick={onClick}>
        <Button 
          fullWidth={fullWidth}
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