import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';
import useEventListener from '@use-it/event-listener';

const initialPosition = {
    x: 15,
    y: 15
}

const Hero = () => {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');

    // no Terminal, rodar "npm install @use-it/event-listener --save"
    // e importar aqui: "import useEventListener from '@use-it/event-listener';"
    useEventListener('keydown', (event: any) => {
        switch (event.key) {
            case 'ArrowLeft':
                updatePositionState({ x: positionState.x - 1, y: positionState.y });
                updateDirectionState("LEFT");
                break;
            case 'ArrowRight':
                updatePositionState({ x: positionState.x + 1, y: positionState.y });
                updateDirectionState("RIGHT");
                break;
            case 'ArrowUp':
                updatePositionState({ x: positionState.x, y: positionState.y + 1 });
                break;
            case 'ArrowDown':
                updatePositionState({ x: positionState.x, y: positionState.y - 1 });
                break;
            default:
                break;
        }
    });

    return (        
        <div 
            style={
                {
                    position: "absolute",
                    bottom: TILE_SIZE * positionState.y,
                    left: TILE_SIZE * positionState.x,
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