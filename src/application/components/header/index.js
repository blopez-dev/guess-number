import Component from '../../../common/services/component';
import Menu from './components/menu';
import Logo from './components/logo';

function Header(state, container) {
    this.container = container;

    this.template = () => {
        const root = document.createElement('header');
        const container = document.createElement('div');

        new Logo(null, container);
        new Menu(null, container);

        root.classList.add('header');
        container.classList.add('header__container');
        root.appendChild(container);

        return root;
    };

    this.render();
}

Header.prototype = Component;

export default Header;