import Component from '../../../common/services/component';
import { routesList, routes } from '../../config/routes-config.js';
import EventEmitter from '../../../common/services/event-emitter';

function Routes(state, container) {
    this.container = container;
    this.state = {
        pathname: window.location.pathname
    };

    this.template = () => {
        const root =  document.createElement('div');
        const { component: Page } = routesList.find(({ path }) => path === this.state.pathname) || routes.defaultPage;

        new Page(null, root);

        return root;
    };

    EventEmitter.subscribe('urlChange', ({ path }) => {
        this.setState(() => ({
            pathname: path
        }))
    });

    this.render();
}

Routes.prototype = Component;

export default Routes;