import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from './TablePaginationActions';
import { TABLE_HEADERS } from '../../metadata/customTableMetadata';
import { DRINK_FIELDS } from '../../metadata/drinkMetadata';
import CollapsibleTextCell from './Cell/CollapsibleTextCell';

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

const rowsPerPageList = [10, 25, 50];

const CustomTable = ({ data, tableType }) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const tableHeaders = TABLE_HEADERS[tableType];

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={rowsPerPageList}
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                    <TableRow>
                        {tableHeaders.map((header, idx) => (
                            <TableCell key={idx} align={"left"}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data
                    ).map((row) => (
                        <TableRow key={row.id}>
                            {/*{DRINK_FIELDS[tableType].map((field, idx) => (*/}
                            {/*    <TableCell key={idx} align="left">{row[field]}</TableCell>*/}
                            {/*))}*/}
                            {DRINK_FIELDS[tableType].map((field, idx) => (
                                <CollapsibleTextCell key={idx} text={row[field]} />//{row[field]}</CollapsibleTextCell>
                            ))}
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;