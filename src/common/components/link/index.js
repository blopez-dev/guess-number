import Component from '../../services/component';
import EventEmitter from '../../../common/services/event-emitter';

function Link(state, container, children) {
    this.container = container;
    this.state = {
        active: state.path === window.location.pathname,
        ...state,
    };

    this.template = () => {
        const { title, path, active, activeClass = 'active' } = this.state;
        // Nodes
        const root = document.createElement('a');
        root.setAttribute('href', path);

        // Events
        root.addEventListener('click', (event) => {
            event.preventDefault();
            history.pushState({ path }, path, path);
            EventEmitter.emit('urlChange', { path })
        });

        if (active) {
            root.classList.add(activeClass);
        }

        if(children) {
            root.appendChild(children);
        }

        // Structure
        if(title) {
            const text = document.createTextNode(title);
            root.append(text);
        }

        return root;
    };

    EventEmitter.subscribe('urlChange', ({ path }) => {
        this.setState(() => ({
            active: path === this.state.path,
        }))
    });

    this.render();
}

Link.prototype = Component;

export default Link;