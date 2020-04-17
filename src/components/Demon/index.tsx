import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants';

const Demon = () => {
    return (        
        <div 
            style={
                {
                    position: "absolute",
                    bottom: TILE_SIZE * 15,
                    left: TILE_SIZE * 3,
                    width: TILE_SIZE * 2,
                    height: 100,
                    backgroundImage: "url(./assets/DEMON.png)",
                    backgroundRepeat: "no-repeat",
                    animation: "demon-animation .5s steps(4) infinite",
                }                
            }
        />
    );    
}

export default Demon;