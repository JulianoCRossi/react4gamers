import useEventListener from '@use-it/event-listener';
import React from 'react';

/// nome da função começa com "use" devido ser um padrão do REACT para HOOK's
function useHeroMoviment(initialPosition: any) {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');

    // no Terminal, rodar "npm install @use-it/event-listener --save"
    // e importar aqui: "import useEventListener from '@use-it/event-listener';"
    useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
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

    return {
        position: positionState,
        direction: direction
    }
}

export default useHeroMoviment;