import { useSelector } from "react-redux";

import { selectIsStarted, selectIsFinished } from "./testSlice";

import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import TestPage from "./pages/TestPage";

function Test() {
  const isStarted = useSelector(selectIsStarted);
  const isFinished = useSelector(selectIsFinished);

  if (!isStarted) {
    return <StartPage />;
  } else if (isFinished) {
    return <EndPage />;
  } else {
    return <TestPage />;
  }
}

export default Test;
