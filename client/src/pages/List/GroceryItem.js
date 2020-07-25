import React from 'react';
import { ActionAnimations, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';
import {Divider} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
    display: 'flex',
    '&>.image': {
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      '&>img': {
        maxWidth: '75px',
        maxHeight: '75px',
        marginRight: '1rem',
      },
    },
    '&>.text': {
      '&>h1, &>h2, &>p': {
        margin: '0',
        fontWeight: '400'
      },
      '&>h1': {
        fontSize: '1.5rem',
      },
      '&>h2': {
        fontSize: '1rem',
        marginBottom: '0.5rem',
      },
      '&>p': {
        fontSize: '1rem',
        color: Palette.Grey,
      },
    }
  },
  delete: {
    background: Palette.Red,
    color: Palette.White,
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    padding: '0rem 3rem',
  },
})


const GroceryItem = ({deleteGroceryById, grocery: {_id, name, quantity, note, imageUrl}}) => {
  const classes = useStyles();


  return (
    <div>
      <SwipeableListItem
        threshold={0.33}
        actionAnimation={ActionAnimations.REMOVE}
        swipeRight={{
          content: <div className={classes.delete}><DeleteIcon/></div>,
          action: () => {
            deleteGroceryById(_id)
            console.log('delete: ' + _id)
          }
        }}
        onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
      >
        <div className={classes.root}>
          <div className='image'>
            <img src={imageUrl}/>
          </div>
          <div className='text'>
            <h1>{name}</h1>
            <h2>{quantity}</h2>
            <p>{note}</p>
          </div>
        </div>
      </SwipeableListItem>
      </div>
  )
}

export default GroceryItem;