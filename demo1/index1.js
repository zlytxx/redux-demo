const state = {
  count: 1
};
const listeners = [];

function subscribe(listener) {
  listeners.push(listener);
}

subscribe(() => {
  console.log(state.count);
});

function changeCount(val) {
  state.count = val;

  listeners.forEach((listener) => {
    listener();
  });
}

changeCount(2);
changeCount(3);
changeCount(4);