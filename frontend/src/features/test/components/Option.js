import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import { handleAnswerButtonClick } from "../testSlice";

export default function Option({ answerOption }) {
  const dispatch = useDispatch();

  return (
    <Button
      variant="outlined"
      onClick={() => dispatch(handleAnswerButtonClick(answerOption))}
    >
      {answerOption.answerText}
    </Button>
  );
}
