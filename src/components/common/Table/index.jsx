import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "rank", label: "Rank", align: "center" },
  { id: "participantName", label: "Participant Name", align: "center" },
  {
    id: "totalPoints",
    label: "Total Points",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(rank, participantName, totalPoints) {
  return { rank, participantName, totalPoints };
}

const rows = [
  createData("1", "Aadarshini Bakshi", 350),
  createData("2", "Arundhati Sinha", 320),
  createData("3", "Sumita  Ghoshal", 290),
  createData("4", "Sumita  Ghoshal", 270),
  createData("4", "Neha Malhotra", 250),
];

const CustomTable = () => {
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
