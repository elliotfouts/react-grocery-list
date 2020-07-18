import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    color: 'currentColor'
  }
})

const Link = ({href, children, style}) => {
  const classes = useStyles();
  return (
    <a style={style} className={classes.root} href={href}>
      {children}
    </a>
  )
}

export default Link;