import Component from '../../common/services/component';

function Scores(state, container) {
    this.container = container;
    this.state = {
        loading: true,
        data: null,
    };

    this.template = () => {
        const root =  document.createElement('div');
        const content = document.createTextNode('Scores page');

        if(this.state.loading) {
            const content = document.createTextNode('Loading');
            root.appendChild(content);
        } else {
            const content = document.createTextNode(this.state.data.name);
            root.appendChild(content);
        }

        root.appendChild(content);

        return root;
    };

    fetch('https://swapi.co/api/people/1/').then((response) => {
        return response.json();
    }).then((data) => {
        this.setState(() => ({
           loading: false,
           data: data,
        }));
    });

    this.render();
}

Scores.prototype = Component;

export default Scores;