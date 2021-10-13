import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { selectUserResults } from "../testSlice";
import theme from "../../../app/theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Results() {
  const rows = useSelector(selectUserResults);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Question ID</StyledTableCell>
            <StyledTableCell align="center">Instructions</StyledTableCell>
            <StyledTableCell align="center">Question</StyledTableCell>
            <StyledTableCell align="center">Correct Answer</StyledTableCell>
            <StyledTableCell align="center">User Answer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow align="center" key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.instructionText}</StyledTableCell>
              <StyledTableCell>{row.questionText}</StyledTableCell>
              <StyledTableCell>{row.correctAnswer}</StyledTableCell>
              <StyledTableCell
                sx={{
                  color:
                    row.userAnswer === row.correctAnswer
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                }}
              >
                {row.userAnswer}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
