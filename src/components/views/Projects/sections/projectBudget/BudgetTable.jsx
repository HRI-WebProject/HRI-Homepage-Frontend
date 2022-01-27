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
      budget: "3300만",
    },
    {
      project: t("project-table-2"),
      budget: "3000만",
    },
    {
      project: t("project-table-3"),
      budget: "3억 2000만",
    },
    {
      project: t("project-table-4"),
      budget: "3000만",
    },
    {
      project: t("project-table-5"),
      budget: "2700만",
    },
    {
      project: t("project-table-6"),
      budget: "2000만",
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
