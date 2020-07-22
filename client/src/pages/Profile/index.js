import React from 'react';
import Navbar from '../../components/Navbar';
import ProfilePicture from '../../components/ProfilePicture';
import {PaddedContainer} from '../../components/Container';
import {StandardCard} from '../../components/Cards';
import {TopRightIcon} from '../../components/Icons'
import {Divider} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRight from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
})

const Profile = () => {
  const classes = useStyles();
  const listNames = ['Family', 'Summer Camping', 'Birthday Party'];

  return (
    <div>
      <TopRightIcon href='/profile/settings' icon={<SettingsIcon/>}/>
      <PaddedContainer>
        <ProfilePicture size={75} border={0} imageUrl={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} style={{marginBottom: '2rem',}}/>
        <p style={{marginBottom: '1rem'}}>Jane Doe</p>
        <p>janedoe@gmail.com</p>
      </PaddedContainer>
      <Divider/>
      <PaddedContainer>
        {listNames.map(list => {
          return (
            <StandardCard>
              <h3>{list}</h3>
              <ChevronRight/>
            </StandardCard>
          )
        })}
        <StandardCard style={{backgroundColor: Palette.Green, color: Palette.White}}>
            <h3>NEW LIST</h3>
        </StandardCard>
      </PaddedContainer>
      <Navbar/>
    </div>
  )
}

export default Profile;