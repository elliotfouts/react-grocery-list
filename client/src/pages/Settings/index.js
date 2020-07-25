import React from 'react';
import {TopLeftIcon} from '../../components/Icons';
import {TopRight as TopRightButton, FilledButton, PlainButton} from '../../components/Buttons'
import {PaddedContainer} from '../../components/Container';
import {InputUnderlined} from '../../components/Inputs';
import ProfilePicture from '../../components/ProfilePicture'
import Navbar from '../../components/Navbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette';

const useStyles = makeStyles({
  root: {
    height: '30%', 
    marginBottom: '4rem'
  },
  picture: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
})

const Settings = () => {
  const classes = useStyles();

  return (
    <div>
      <div className= {classes.root}>
        <TopLeftIcon href='/profile' icon={<ChevronLeftIcon/>}/>
        <TopRightButton>Save</TopRightButton>
      </div>
      <PaddedContainer>
        <div className= {classes.picture}>
          <ProfilePicture size={85} border={0} imageUrl={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} style={{marginBottom: '2rem',}}/>
          <FilledButton icon={<CropOriginalIcon/>}>SELECT</FilledButton>
        </div>
        <InputUnderlined style={{marginBottom: '50px'}} placeholder={'Jane Doe'}></InputUnderlined>
        <InputUnderlined style={{marginBottom: '50px'}} placeholder={'janedoe@gmail.com'}></InputUnderlined>
        <PlainButton style={{color: Palette.Green}}>Change Password</PlainButton>
      </PaddedContainer>
      <Navbar/>
    </div>
  )
}

export default Settings;