import React from 'react';
import Chip from '@material-ui/core/Chip';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    backgroundColor: Palette.GreenTransparent,
    color: Palette.Green,
    borderColor: Palette.GreenTransparent,
    borderRadius: 5,
  }
})

const FilledChip = () => {
  const classes = useStyles();

  return (
      <div>
        <Chip 
          className={classes.root}
          size= 'small'
          variant= 'outlined'
          label = 'IN CART'
        >
        </Chip>
      </div>
  )
}

export default FilledChip;