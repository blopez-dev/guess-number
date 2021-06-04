function EventEmitter() {
    const subscribers = {};

    this.subscribe = (event, listener) => {
        const listeners = subscribers[event] || (subscribers[event] = []);
        listeners.push(listener);
    };

    this.emit = (event, payload) => {
        const listeners = subscribers[event];

        if(listeners && listeners.length) {
            listeners.forEach((listener) => listener(payload));
        }
    };
}

export default new EventEmitter();