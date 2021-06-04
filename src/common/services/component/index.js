export const isDifferentState = (prevState, nextState) => {
  const prevStateValues = Object.values(prevState);
  const nextStateValues = Object.values(nextState);
  const areSameLength = prevStateValues.length === nextStateValues.length;

  return !areSameLength || nextStateValues.some((value, index) => value !== prevStateValues[index]);
};

const Component = {
    state: {},
    render: function() {
        if (this.ref) this.unmount();

        this.ref = this.template();

        if(this.ref) {
            this.container.append(this.ref);
        }

        if(this.onRender) {
            setTimeout(() => this.onRender());
        }
    },
    unmount: function() {
        this.ref.parentNode.removeChild(this.ref);
        this.ref = null;
    },
    setState: function(stateUpdater) {
        const newState = { ...this.state, ...stateUpdater(this.state) };
        const stateHasChanged = isDifferentState(this.state, newState);

        if (stateHasChanged) {
            this.state = newState;
            this.render();
        }
    },
};

export default Component;