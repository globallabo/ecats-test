import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import { startTest } from "./testSlice";

export default function StartPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome to the ECATS Diagnostic Test</h2>
      <Button variant="outlined" onClick={() => dispatch(startTest())}>
        Start the Test
      </Button>
    </div>
  );
}
