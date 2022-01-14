import React from "react";
import { styled } from "@mui/material/styles";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import budgetTabledata from "@projects/sections/projectBudget/BudgetTableData";

function BudgetTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2f5597",
      color: theme.palette.common.white,
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  return (
    <div>
      <Table
        sx={{ minWidth: 700, maxWidth: 900 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <b>Project (최근 5년)</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Budget (원)</b>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {budgetTabledata.map((row) => (
            <TableRow key={row.project}>
              <StyledTableCell component="th" scope="row">
                {row.project}
              </StyledTableCell>
              <StyledTableCell align="right">
                <b>{row.budget}</b>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BudgetTable;
