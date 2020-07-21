import React from 'react';
import { Card } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    color: Palette.Green,
    marginBottom: '0.5rem',
  }
})

const StandardCard = ({children, style, href, onClick}) => {
  const classes = useStyles();
  const alignment = (children.length > 1) ? {justifyContent: 'space-between'} : {justifyContent: 'center'}
  return (
    <a href={href}>
      <Card onClick={onClick} style={{...style, ...alignment}} className={classes.root}>
        {children}
      </Card>
    </a>
  )
}

export default StandardCard;