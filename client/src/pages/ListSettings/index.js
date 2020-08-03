import React from 'react';
import {TopLeftIcon} from '../../components/Icons';
import {TopRight as TopRightButton, FilledButton, PlainButton} from '../../components/Buttons'
import {PaddedContainer} from '../../components/Container';
import {InputUnderlined} from '../../components/Inputs';
import {StandardCard} from '../../components/Cards';
import ProfilePicture from '../../components/ProfilePicture';
import {Title} from '../../components/Text';
import MemberCard from './MemberCard';
import StoreCard from './StoreCard';
import CategoryCard from './CategoryCard';
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
        <StandardCard style={{backgroundColor: Palette.Green, color: Palette.White}}>
            <h3>Add Member</h3>
        </StandardCard>
        <Title style={{marginTop: '1rem', marginBottom: '0.5rem',}}>Stores</Title>
        <StoreCard name={'Whole Foods'}/>
        <StandardCard style={{backgroundColor: Palette.Green, color: Palette.White}}>
            <h3>Add Store</h3>
        </StandardCard>
        <Title style={{marginTop: '1rem', marginBottom: '0.5rem',}}>Categories</Title>
        <CategoryCard name={'Produce'}/>
        <CategoryCard name={'Dairy/Eggs'}/>
        <CategoryCard name={'Meat'}/>
        <CategoryCard name={'Frozen'}/>
        <StandardCard style={{backgroundColor: Palette.Green, color: Palette.White}}>
            <h3>Add Category</h3>
        </StandardCard>
      </PaddedContainer>
    </div>
  )
}

export default Settings;