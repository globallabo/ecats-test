import Typography from "@mui/material/Typography";

export default function Question({ question }) {
  return (
    <>
      <Typography variant="h2">{question.instructionText}</Typography>
      <Typography variant="body1">{question.questionText}</Typography>
    </>
  );
}
