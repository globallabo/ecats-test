import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import dompurify from "dompurify";

import { selectCurrentQuestion } from "../testSlice";

export default function Question({ question }) {
  const currentQuestion = useSelector(selectCurrentQuestion);

  // Modify positional question with some extra spacing
  function addPositionQuestionSpacing(text) {
    let regex1 = "/([①②③④])/g";
    let replacement1 = "&nbsp;&nbsp;--$&--&nbsp;&nbsp;";

    let newText1 = text.replace(regex1, replacement1);

    let regex2 = "/([(])/g";
    let replacement2 = "<br />--(";

    let newText2 = newText1.replace(regex2, replacement2);
    return newText2;
  }
  // Sanitize instruction text that might have simple HTML (underline, etc.)
  // This should be refactored out when using the API to get data
  const sanitizer = dompurify.sanitize;
  return (
    <>
      <Typography variant="h2" mb="2rem">
        問 {currentQuestion + 1}:&nbsp;
        <span
          dangerouslySetInnerHTML={{
            __html: sanitizer(question.instructionText),
          }}
        />
      </Typography>
      <Typography variant="body1" textAlign="center">
        <span
          dangerouslySetInnerHTML={{
            __html: sanitizer(
              addPositionQuestionSpacing(question.questionText)
            ),
          }}
        />
      </Typography>
    </>
  );
}
