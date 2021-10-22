import Typography from "@mui/material/Typography";
import dompurify from "dompurify";

export default function Question({ question }) {
  // Sanitize instruction text that might have simple HTML (underline, etc.)
  const sanitizer = dompurify.sanitize;
  return (
    <>
      <Typography variant="h2">
        <span
          dangerouslySetInnerHTML={{
            __html: sanitizer(question.instructionText),
          }}
        />
      </Typography>
      <Typography variant="body1">{question.questionText}</Typography>
    </>
  );
}
