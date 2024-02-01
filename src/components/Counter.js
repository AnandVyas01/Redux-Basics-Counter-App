import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterStoreActions } from "../Store/Store";

const Counter = () => {
  const counter = useSelector((state) => state.counters.counter);
  const toggler = useSelector((state) => state.counters.toggle);
  const dispatch = useDispatch();
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggler" });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterStoreActions.Toggle());
  };

  // const handleIncremet = () => {
  //   dispatch({ type: "increment" });
  // };

  // const handleIncrimentFive = () => {
  //   dispatch({ type: "incrementFive", value: 5 });
  // };

  // const handleDecrement = () => {
  //   dispatch({ type: "decrement" });
  // };

  const handleIncremet = () => {
    dispatch(counterStoreActions.increment());
  };

  const handleIncrimentFive = () => {
    dispatch(counterStoreActions.increase(5));
  };

  const handleDecrement = () => {
    dispatch(counterStoreActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggler && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncremet}>Increment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrimentFive}>+ 5</button>
    </main>
  );
};

export default Counter;
