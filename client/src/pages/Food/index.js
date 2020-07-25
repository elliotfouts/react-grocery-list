import React from 'react';
import Navbar from '../../components/Navbar';
import {TopLeftIcon} from '../../components/Icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FoodInfo from './FoodInfo';

const Food = () => {
  return (
    <div>
        <TopLeftIcon href='/add' icon={<ChevronLeftIcon/>}/>

        <FoodInfo/>
    </div>
  )
}

export default Food;