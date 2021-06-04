import Component from '../../common/services/component';

function Error(state, container) {
    this.container = container;

    this.template = () => {
        const root = document.createElement('div');
        const content = document.createTextNode('Not found');

        root.appendChild(content);

        return root;
    };

    this.render();
}

Error.prototype = Component;

export default Error;