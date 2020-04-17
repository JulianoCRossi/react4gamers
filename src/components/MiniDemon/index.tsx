import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

const MiniDemon = () => {
    return (        
        <div 
            style={
                {
                    position: "absolute",
                    bottom: TILE_SIZE * 8,
                    left: TILE_SIZE * 3,
                    width: TILE_SIZE,
                    height: TILE_SIZE + HEAD_OFFSET,
                    backgroundImage: "url(./assets/MINI-DEMON.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
                    animation: "mini-demon-animation .5s steps(4) infinite",
                }                
            }
        />
    );    
}

export default MiniDemon;