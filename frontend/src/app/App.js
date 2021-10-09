import { useSelector } from "react-redux";

import { selectIsStarted, selectIsFinished } from "../features/test/testSlice";

import StartPage from "../features/test/StartPage";
import EndPage from "../features/test/EndPage";
import Test from "../features/test/Test";

function App() {
  const isStarted = useSelector(selectIsStarted);
  const isFinished = useSelector(selectIsFinished);

  if (!isStarted) {
    return <StartPage />;
  } else if (isFinished) {
    return <EndPage />;
  } else {
    return <Test />;
  }
}

export default App;
