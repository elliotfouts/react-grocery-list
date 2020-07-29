import React from 'react';
import {TopLeftIcon} from '../../components/Icons';
import {TopRight as TopRightButton, FilledButton, PlainButton} from '../../components/Buttons'
import {PaddedContainer} from '../../components/Container';
import {InputUnderlined} from '../../components/Inputs';
import ProfilePicture from '../../components/ProfilePicture'
import {Title} from '../../components/Text';
import MemberCard from './MemberCard';
import StoreCard from './StoreCard';
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
        <Title style={{marginBottom: '0.5rem',}}>Name</Title>
        <InputUnderlined style={{fontSize: '1rem', marginBottom: '1.5rem'}} placeholder={'Family Name'}></InputUnderlined>
        <Title style={{marginBottom: '0.5rem',}}>Members</Title>
        <MemberCard name={'You'} isUser={true}/>
        <MemberCard name={'Dad'}/>
        <MemberCard name={'Mom'}/>
        <Title style={{marginTop: '1rem', marginBottom: '0.5rem',}}>Stores</Title>
        <StoreCard name={'Whole Foods'}/>
      </PaddedContainer>
    </div>
  )
}

export default Settings;