import React from 'react';
import {StandardCard} from '../../components/Cards';
import {PlainButton} from '../../components/Buttons';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  info: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    '&>img': {
      height: '50px',
      width: '50px',
      marginRight: '1rem',
    },
    '&>h3': {
      fontWeight: 200,
      fontSize: '1.2rem',
      color: Palette.Black,
      margin: 0,
      padding: 0,
    }
  }
});


const StoreCard = ({name, isUser = false}) => {
  const classes = useStyles()
  return (
    <StandardCard>
      <div className={classes.info}>
        <img src={imageUrl}/>
        <h3>{name}</h3>
      </div>
      <PlainButton style={{color: Palette.Red}}>remove</PlainButton>
    </StandardCard>
  )
};

export default StoreCard;


const imageUrl = 'https://i.pinimg.com/280x280_RS/0f/ef/f4/0feff4f325c0d60bd1b64abcfe438402.jpg';