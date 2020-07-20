import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 100,
  },
  label: {
      backgroundColor: Palette.GreenTransparent,
      color: Palette.Green
  },
})

const StandardCard = ({children, onClick}) => {
  const classes = useStyles();

  return (
      <div onClick={onClick}>
        <Card 
          className={classes.root}
        >
            <CardActionArea className={classes.label}>
                <CardMedia
                className={classes.media}
                image= 'https://via.placeholder.com/140x100'
                />
                <CardContent
                >
                <Typography 
                gutterBottom 
                variant="body2" 
                component="p"
                >
                    Lizard
                </Typography>
                </CardContent>
            </CardActionArea>
          {children}
        </Card>
      </div>
  )
}

export default StandardCard;