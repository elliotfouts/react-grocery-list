import React from 'react';
import Navbar from '../../components/Navbar';
import IconButton from '@material-ui/core/IconButton';
import {PlainButton} from '../../components/Buttons';
import {Search} from '@material-ui/icons';
import Palette from '../../utils/palette';

const List = () => {
  return (
    <div>
      <h1>List Page</h1>
      <IconButton size='small'><Search/></IconButton>
      <PlainButton>Plain</PlainButton>
      <Navbar/>
    </div>
  )
}

export default List;