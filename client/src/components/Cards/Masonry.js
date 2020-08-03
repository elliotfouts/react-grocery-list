import React from 'react';
import Masonry from 'react-masonry-component';
import {FilledButton} from '../Buttons';
import {Add} from '@material-ui/icons'
import FoodDBCard from './FoodDb';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    rightCol: {
        width:'50%', 
        display: 'row', 
        flex: '50%', 
        paddingRight: '5px'
    }, 
    leftCol: {
        width:'50%',
        paddingLeft: '5px'
    }
  })

const MasonryElement = ({groceries}) => {
    const classes = useStyles();

    return(
        <div>
            <Masonry>
            
            <div className={classes.rightCol}>
            {groceries.map(({label, imageUrl}, index) => (index % 2 == 0) && <FoodDBCard style={{marginBottom: '1rem',}}label={label} imageUrl={imageUrl}/>)}
            </div>
            
            <div className={classes.leftCol}>
            {groceries.map(({label, imageUrl}, index) => (index % 2 != 0) && <FoodDBCard style={{marginBottom: '1rem',}}label={label} imageUrl={imageUrl}/>)}
            </div>
            </Masonry>
        </div>
    )
}

export default MasonryElement;