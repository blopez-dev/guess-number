import Component from '../../../../common/services/component';
import messages from './tr';

function Form(state, container) {
    this.container = container;
    this.state = state;

    this.template = () => {
        const { onSubmit } = this.state;
        const root = document.createElement('form');
        const input = document.createElement('input');
        this.input = input;

        input.setAttribute('placeholder', messages.placeholder);
        root.appendChild(input);

        root.addEventListener('submit', () => {
            onSubmit(parseInt(input.value));
            input.value = '';
        });

        return root;
    };

    this.onRender = () => {
        this.input.focus();
    };

    this.render();
}

Form.prototype = Component;

export default Form;