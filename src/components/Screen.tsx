import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Header.css';

function Screen()
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
          name: "Random Name #3",
          description: "Hello World!"
      }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <div className='popUp'> {item.name} </div> )
            }
        </Carousel>
    )
}


export default Screen;
