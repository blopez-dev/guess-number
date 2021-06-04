import Dashboard from '../../pages/dashboard';
import Hero from '../../pages/hero';
import Details from '../../pages/details';


export const baseUrl = '/game-of-hero';

export const routes = {
    home: {
        path: baseUrl + '/',
        component: Dashboard,
    },
    game: {
        path: baseUrl + '/game',
        component: Hero,
    },
    scores: {
        path: baseUrl + '/scores',
        component: Details,
    },

};

export const routesList = Object.values(routes);