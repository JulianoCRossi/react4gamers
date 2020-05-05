import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';
import React from 'react';
import useHeroMoviment from '../../hooks/useHeroMoviment';

const Hero = () => {
    const { position, direction } = useHeroMoviment({x: 15, y: 15});

    return (        
        <div 
            style={
                {
                    position: "absolute",
                    bottom: TILE_SIZE * position.y,
                    left: TILE_SIZE * position.x,
                    width: TILE_SIZE,
                    height: TILE_SIZE + HEAD_OFFSET,
                    backgroundImage: "url(./assets/HERO.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
                    animation: "hero-animation .5s steps(4) infinite",
                    transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
                }                
            }
        />
    );    
}

export default Hero;