import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants';

const Chest = () => {
    return (        
        <div 
            style={
                {
                    position: "absolute",
                    bottom: TILE_SIZE * 10,
                    left: TILE_SIZE * 3,
                    width: TILE_SIZE,
                    height: 100,
                    backgroundImage: "url(./assets/CHEST.png)",
                    backgroundRepeat: "no-repeat",
                    animation: "chest-animation 1s steps(3) infinite",
                }                
            }
        />
    );    
}

export default Chest;