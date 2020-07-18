import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette'

const useStyles = makeStyles({
  root: {
    color: Palette.Black,
    fontWeight: '200',
    margin: '0rem',
  }
})

const Title = ({style, children,}) => {
  const classes = useStyles();
  return (
    <h1 style={style} className={classes.root}>
      {children}
    </h1>
  )
}

export default Title;