import Component from '../../../common/services/component';

function Footer(state, container) {
    this.container = container;

    this.template = () => {
        const root =  document.createElement('footer');

        root.classList.add('footer');
        root.innerHTML = '&copy; 2019 www.guessnumbergame.com';

        return root;
    };

    this.render();
}

Footer.prototype = Component;

export default Footer;