import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  top: {
    position: 'absolute',
    top: '20px',
  },
  left: {
    left: '20px',
  },
  right: {
    right: '20px',
  },

})


export const TopLeft = ({children}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.top} ${classes.left}`}>
      {children}
    </div>
  )
}

export const TopRight = ({children}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.top} ${classes.right}`}>
      {children}
    </div>
  )
}

