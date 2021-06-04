import Component from '../../../../../common/services/component';
import { routes } from '../../../../../application/config/routes-config.js';
import MenuItem from './components/menu-item';

const menuItems = [
    {
        title: 'Home',
        path: routes.home.path,
    },
    {
        title: 'Game',
        path: routes.game.path,
    },
    {
        title: 'Scores',
        path: routes.scores.path,
    },
];

function Menu(state, container) {
    this.container = container;

    this.template = () => {
        const root =  document.createElement('nav');
        const list = document.createElement('ul');

        menuItems.forEach((item) => {
            new MenuItem({ item }, list);
        });

        root.classList.add('header__menuContainer');
        list.classList.add('header__menu');

        root.append(list);

        return root;
    };

    this.render();
}

Menu.prototype = Component;

export default Menu;