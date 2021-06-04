import Component from '../../../../../../../common/services/component';
import Link from '../../../../../../../common/components/link';

function MenuItem(state, container) {
    this.container = container;
    this.state = state;

    this.template = () => {
        const { title, path } = this.state.item;
        const root =  document.createElement('li');
        new Link({ title, path }, root);

        return root;
    };

    this.render();
}

MenuItem.prototype = Component;

export default MenuItem;