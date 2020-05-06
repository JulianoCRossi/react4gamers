import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../context/canvas/helpers';

/// nome da função começa com "use" devido ser um padrão do REACT para HOOK's
function useHeroMoviment(initialPosition: any) {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

    // no Terminal, rodar "npm install @use-it/event-listener --save"
    // e importar aqui: "import useEventListener from '@use-it/event-listener';"
    useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
        const direction = event.key as EDirection;
        const nextPosition = handleNextPosition(direction, positionState);

        updatePositionState(nextPosition);
        updateDirectionState(direction);
        // switch (event.key) {
        //     case EDirection.LEFT:
        //         updatePositionState({ x: positionState.x - 1, y: positionState.y });
        //         updateDirectionState(EDirection.LEFT);
        //         break;
        //     case EDirection.RIGHT:
        //         updatePositionState({ x: positionState.x + 1, y: positionState.y });
        //         updateDirectionState(EDirection.RIGHT);
        //         break;
        //     case EDirection.UP:
        //         updatePositionState({ x: positionState.x, y: positionState.y + 1 });
        //         break;
        //     case EDirection.DOWN:
        //         updatePositionState({ x: positionState.x, y: positionState.y - 1 });
        //         break;
        //     default:
        //         break;
        // }
    });

    return {
        position: positionState,
        direction: direction
    }
}

// Disponibiliza para uso no projeto
export default useHeroMoviment;