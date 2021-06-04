import Component from '../../../../../common/services/component';
import { routes } from '../../../../../application/config/routes-config.js';
import Link from '../../../../../common/components/link';

function Logo(state, container) {
    this.container = container;

    this.template = () => {
        const root = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', 'src/common/assets/img/logo.png');

        root.classList.add('header__logo');

        new Link({ path: routes.home.path }, root, img);

        return root;
    };

    this.render();
}

Logo.prototype = Component;

export default Logo;