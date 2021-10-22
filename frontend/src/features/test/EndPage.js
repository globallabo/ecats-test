import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Results from "./components/Results";

export default function EndPage() {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  return (
    <Container>
      <Box textAlign="center">
        <Typography variant="h1">
          Thanks for taking the ECATS Diagnostic Test
        </Typography>
        {showResults ? (
          <>
            <Button variant="outlined" onClick={() => setShowResults(false)}>
              Hide Results
            </Button>
            <Results />
          </>
        ) : (
          <Button variant="outlined" onClick={() => setShowResults(true)}>
            Show Results
          </Button>
        )}
      </Box>
    </Container>
  );
}
