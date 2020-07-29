import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    placeItems: 'center',
    '& span': {
      color: Palette.Grey,
      border: `2px solid currentColor`,
      borderRadius: '5px',
      display: 'inline-flex',
      padding: '0.5rem 2rem',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '2rem',
      '& p': {
        fontWeight: '600',
        display: 'inline-block',
      }
    }
  }
})

const AddImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>
        <ImageIcon style={{ fontSize: 80 }}/>
        <p>GET IMAGE</p>
      </span>
    </div>
  )
}

export default AddImage;