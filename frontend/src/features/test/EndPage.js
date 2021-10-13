import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Results from "./components/Results";

export default function EndPage() {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  return (
    <div>
      <Box textAlign="center">
        <h2>Thanks for taking the ECATS Diagnostic Test</h2>
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
    </div>
  );
}
