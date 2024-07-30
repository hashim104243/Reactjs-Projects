
const redux = require("redux")

const initVAlue = {
  counter: 0
}
function reducer(store = initVAlue, action) {
  if (action.type == "increament") {
    return { counter: store.counter + 1 }
  }
  else if (action.type == "dec") {
    return { counter: store.counter - 1 }
  }
  else if (action.type == "add") {
    return { counter: store.counter + action.payload.counter }
  }
  return store;
}

const store = redux.createStore(reducer);
const subscriber = () => {
  const state = store.getState();
  console.log(state);
}
store.subscribe(subscriber);
store.dispatch({ type: "increament" })
store.dispatch({ type: "increament" })
store.dispatch({ type: "dec" })
store.dispatch({ type: "add", payload: { counter: 7 } })


