import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { startTest } from "./testSlice";

export default function StartPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome to the ECATS Diagnostic Test</h2>
      <Box textAlign="center">
        <Button variant="outlined" onClick={() => dispatch(startTest())}>
          Start the Test
        </Button>
      </Box>
    </div>
  );
}
