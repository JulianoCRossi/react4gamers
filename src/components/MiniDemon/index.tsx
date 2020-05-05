import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

const MiniDemon = () => {
    const { position, direction } = useEnemyMoviment({x: 13, y: 8})

    return (        
        <div 
            style={
                {
                    position: "absolute",
                    bottom: TILE_SIZE * position.y,
                    left: TILE_SIZE * position.x,
                    width: TILE_SIZE,
                    height: TILE_SIZE + HEAD_OFFSET,
                    backgroundImage: "url(./assets/MINI-DEMON.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
                    animation: "mini-demon-animation .5s steps(4) infinite",
                    transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
                }                
            }
        />
    );    
}

export default MiniDemon;