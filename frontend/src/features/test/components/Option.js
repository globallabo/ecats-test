import { useDispatch } from "react-redux";

import { handleAnswerButtonClick } from "../testSlice";

export default function Option({ answerOption }) {
  const dispatch = useDispatch();

  return (
    <li>
      <button onClick={() => dispatch(handleAnswerButtonClick(answerOption))}>
        {answerOption.answerText}
      </button>
    </li>
  );
}
