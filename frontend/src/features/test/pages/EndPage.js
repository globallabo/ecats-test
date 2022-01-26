import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Results from "../components/Results";
import { selectTestInstance } from "../testSlice";
import { useUpdateTestInstanceMutation } from "../../../app/services/ecats";

export default function EndPage() {
  const [showResults, setShowResults] = useState(false);

  const testInstance = useSelector(selectTestInstance);

  const [updateTestInstance] = useUpdateTestInstanceMutation();

  useEffect(() => {
    let finishedAt = new Date().toISOString();
    updateTestInstance({
      id: testInstance,
      finishedAt: finishedAt,
    });
  }, []);

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
