import React from 'react';
import {Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& image': {
      padding: '1rem',
    },
    '& img': {
      maxHeight: '100px',
      maxWidth: '100px',
    },
    '& .label': {
      width: '100%',
      color: Palette.Green,
      backgroundColor: Palette.GreenTransparent,
    }
  },
})

const FoodDbCard = ({label, imageUrl, onClick, style}) => {
  const classes = useStyles();

  return (
      <div onClick={onClick}>
        <Card
          style={style} 
          className={classes.root}>
          <image>
            <img src={imageUrl}/>
          </image>
           <p className='label'>
            {label}
           </p>
        </Card>
      </div>
  )
}

export default FoodDbCard;