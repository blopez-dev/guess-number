import Component from '../../../common/services/component';
import Routes from '../routes';
import Header from '../header';
import Footer from '../footer';

function Layout(state, container) { //null - root
    this.container = container;

    this.template = () => {
        const root = document.createElement('div');
        const main = document.createElement('main');

        new Header(null, root);

        new Routes(null, main);
        main.classList.add('layout__main');
        root.appendChild(main);

        new Footer(null, root);

        return root;
    };

    this.render();
}

Layout.prototype = Component;

export default Layout;