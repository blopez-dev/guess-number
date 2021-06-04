import Component from '../../services/component';

/**
 * Button component
 * @param {String} state.text required
 * @param {Function} state.onClick
 */
function Button(state, container) {
    this.container = container;
    this.state = state;

    this.template = () => {
        const { onClick } = this.state;
        // Nodes
        const root =  document.createElement('div');
        const text = document.createTextNode(this.state.title);

        // Events
        if (onClick) {
            root.addEventListener('click', onClick)
        }

        // Structure
        root.classList.add('button');
        root.append(text);

        return root;
    };

    this.render();
}

Button.prototype = Component;

export default Button;