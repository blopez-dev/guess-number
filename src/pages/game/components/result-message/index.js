import Component from '../../../../common/services/component';
import { guessMessages } from '../../../../common/enums/game.js';
import GameService from '../../../../common/services/game';
import EventEmitter from '../../../../common/services/event-emitter';

function ResultMessage(state, container) {
    this.container = container;
    this.state = {
        guessedNumber: null,
        ...state,
    };

    this.template = () => {
        const { guessedNumber } = this.state;

        if(guessedNumber) {
            const root = document.createElement('p');
            const result = GameService.checkGuess(guessedNumber);
            root.innerHTML = guessMessages[result];

            return root;
        }

        return null;
    };

    EventEmitter.subscribe('guessedNumber', (guessedNumber) => {
        this.setState(() => ({ guessedNumber }));
    });

    this.render();
}

ResultMessage.prototype = Component;

export default ResultMessage;