import React from 'react';
import Navbar from '../../components/Navbar';
import {StandardCard} from '../../components/Cards';
import {InputPlain, InputUnderlined} from '../../components/Inputs';
import ProfilePicture from '../../components/ProfilePicture';
import Palette from '../../utils/palette';
import {makeStyles} from '@material-ui/styles';
import {ChevronRight, Add} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  }
})

const List = () => {
  const classes=useStyles();
  return (
    <div>
      <div className={classes.root}>
        <h1>List Page</h1>
        <StandardCard>
          <h3>Fouts Family</h3>
          <ChevronRight/>
        </StandardCard>
        <StandardCard style={{backgroundColor: Palette.Green, color: Palette.White}}>
            <h3>ADD MEMBER</h3>
        </StandardCard>
        <InputPlain placeholder={'testing'}/>
        <InputUnderlined placeholder={'testing'}/>
      </div>
      <Navbar/>
    </div>
  )
}

export default List;