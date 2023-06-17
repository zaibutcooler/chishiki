import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../store/counterSlice";

const HomePage = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default HomePage;
