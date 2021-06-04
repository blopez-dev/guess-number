 import Component from '../../common/services/component';
import Link from '../../common/components/link';
import { routes } from '../../application/config/routes-config.js';
import messages from './tr';

function Home(state, container) {
    this.container = container;

    this.template = () => {
        const root = document.createElement('div');
        const play = document.createElement('div');
        const title = document.createElement('h1');
        const titleContent = document.createTextNode(messages.title);
        const subtitle = document.createElement('h2');
        const subtitleContent = document.createTextNode(messages.subtitle);

        play.classList.add('home__play');
        new Link({ title: messages.play, path: routes.game.path }, play);

        subtitle.appendChild(subtitleContent);
        title.appendChild(titleContent);
        root.appendChild(title);
        root.appendChild(subtitle);
        root.appendChild(play);

        root.classList.add('home');

        return root;
    };

    this.render();
}

Home.prototype = Component;

export default Home;