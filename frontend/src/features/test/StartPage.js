import { useDispatch } from "react-redux";

import { startTest } from "./testSlice";

export default function StartPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome to the ECATS Diagnostic Test</h2>
      <button onClick={() => dispatch(startTest())}>Start the test</button>
    </div>
  );
}
