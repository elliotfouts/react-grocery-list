import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette'

const useStyles = makeStyles({
  root: {
    color: Palette.Grey,
    fontSize: '1.2rem',
    fontWeight: '200',
  }
})

const Subitle = ({style, children,}) => {
  const classes = useStyles();
  return (
    <h1 style={style} className={classes.root}>
      {children}
    </h1>
  )
}

export default Subitle;