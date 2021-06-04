import Component from '../../common/services/component';
import GameService from '../../common/services/game';
import EventEmitter from '../../common/services/event-emitter';
import Form from './components/form';
import ResultMessage from './components/result-message';
import messages from './tr';

function Game(state, container) {
    this.container = container;
    this.state = state;

    const onSubmit = (guessedNumber) => {
        event.preventDefault();
        EventEmitter.emit('guessedNumber', guessedNumber);
    };

    this.template = () => {
        const root = document.createElement('div');
        const content = document.createTextNode(messages.title);

        root.appendChild(content);

        new Form({ onSubmit }, root);
        new ResultMessage(null, root);

        return root;
    };

    GameService.start();
    this.render();
}

Game.prototype = Component;

export default Game;