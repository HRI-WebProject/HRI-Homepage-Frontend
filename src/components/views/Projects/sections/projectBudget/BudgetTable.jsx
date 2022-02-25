import React from "react";
import { styled } from "@mui/material/styles";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useTranslation } from "react-i18next";

function BudgetTable() {
  const { t, i18n } = useTranslation();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#231F6A",
      color: theme.palette.common.white,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const budgetTabledata = [
    {
      project: t("project-table-1"),
      budget: t("project-table-budget-1"),
    },
    {
      project: t("project-table-2"),
      budget: t("project-table-budget-2"),
    },
    {
      project: t("project-table-3"),
      budget: t("project-table-budget-3"),
    },
    {
      project: t("project-table-4"),
      budget: t("project-table-budget-4"),
    },
    {
      project: t("project-table-5"),
      budget: t("project-table-budget-5"),
    },
    {
      project: t("project-table-6"),
      budget: t("project-table-budget-6"),
    },
  ];

  return (
    <div>
      <Table
        sx={{ minWidth: 700, maxWidth: 1030 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <b>Project ({t("recent-year")})</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Budget (₩)</b>
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
