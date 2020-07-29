import React from 'react';
import {IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {TopRight, TopLeft} from '../Position';

const useStyles = makeStyles({
  top: {
    position: 'absolute',
    top: '20px',
  },
  right: {
    right: '20px',
  },
  left: {
    left: '20px',
  },
})

export const TopRightIcon = ({onClick, href, icon}) => {
  const classes = useStyles();

  console.log(href);

  return (
    <a href={href}>
      <TopRight>
        <IconButton onClick={onClick}>
          {icon}
        </IconButton>
      </TopRight>
    </a>
  )
}

export const TopLeftIcon = ({icon, onClick, href}) => {
  const classes = useStyles();
  return (
    <a href={href}>
      <TopLeft>
        <IconButton onClick={onClick}>
          {icon}
        </IconButton>
      </TopLeft>
    </a>
  )
}
