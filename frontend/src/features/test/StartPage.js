import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { startTest } from "./testSlice";

export default function StartPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="h1">Welcome to the ECATS Diagnostic Test</Typography>
      <Box textAlign="center">
        <Button variant="outlined" onClick={() => dispatch(startTest())}>
          Start the Test
        </Button>
      </Box>
    </Container>
  );
}
