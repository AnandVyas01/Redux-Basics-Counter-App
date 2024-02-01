// import { createStore } from "redux";

// const storeReducer = (state = { counter: 0, toggle: true }, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, toggle: state.toggle };
//   }

//   if (action.type === "toggler") {
//     return {
//       toggle: !state.toggle,
//       counter: state.counter,
//     };
//   }

//   if (action.type === "incrementFive") {
//     return {
//       toggle: state.toggle,
//       counter: state.counter + action.value,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, toggle: state.toggle };
//   }
//   return state;
// };

// const store = createStore(storeReducer);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    Toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuth: false,
  },
  reducers: {
    authenticate(state) {
      state.isAuth = true;
    },
    unAuthenticate(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counters: counterSlice.reducer,
    authentication: authSlice.reducer,
  },
});

export const authStoreActions  = authSlice.actions;

export const counterStoreActions = counterSlice.actions;

export default store;
