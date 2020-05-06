// import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../context/canvas/helpers';

/// nome da função começa com "use" devido ser um padrão do REACT para HOOK's
function useEnemyMoviment(initialPosition: any) {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

    // no Terminal, rodar "npm install @use-it/event-listener --save"
    // e importar aqui: "import useEventListener from '@use-it/event-listener';"
    // useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {

    useInterval(function move() {
        const random = Math.floor(Math.random() * 4);
        const directionArray = Object.values(EDirection);
        const randomDirection = directionArray[random];

        const nextMoviment = handleNextPosition(randomDirection, positionState);
        updatePositionState(nextMoviment);
        updateDirectionState(randomDirection);
    }, 1000);

    return {
        position: positionState,
        direction: direction
    }
}

export default useEnemyMoviment;
