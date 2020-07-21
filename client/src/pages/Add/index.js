import React from 'react';
import Navbar from '../../components/Navbar';
import {Title, Subtitle} from '../../components/Text';
import {InputOutlined} from '../../components/Inputs';
import {Search} from '@material-ui/icons'
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette'

const useStyles = makeStyles({
  root: {
    padding: '2rem',
    backgroundColor: '#EEEEEE',
    minHeight: '100vh',
    '& p': {
      color: Palette.Grey,
    }
  }
})

const Add = () => {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.root}>
        <Title style={{marginBottom: '0.5rem'}}>Hey Elliot</Title>
        <Subtitle style={{marginBottom: '4rem'}}>Find foods that you want</Subtitle>
        <InputOutlined placeholder='search for a food...' icon={<Search/>}/>
        <p>Showing results for</p>
      </main>
      <Navbar/>
    </div>
  )
}

export default Add;