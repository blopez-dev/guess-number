import Component from '../common/services/component';
import Layout from './components/layout';

function Application(container) { //div#app
    this.container = container;

    this.template = () => {
        const root =  document.createElement('div');
        new Layout(null, root);

        return root;
    };

    this.render();
}

Application.prototype = Component;

export default Application;