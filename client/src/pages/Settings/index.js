import React from 'react';
import {TopLeftIcon} from '../../components/Icons';
import {TopRight as TopRightButton} from '../../components/Buttons'
import {PaddedContainer} from '../../components/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Settings = () => {
  return (
    <PaddedContainer>
      <TopLeftIcon href='/profile' icon={<ChevronLeftIcon/>}/>
      <TopRightButton>Save</TopRightButton>
      <h1>Settings page</h1>
    </PaddedContainer>
  )
}

export default Settings;