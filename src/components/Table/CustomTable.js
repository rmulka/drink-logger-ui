import React, { useContext, useState, useEffect } from 'react';

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
import { DEFAULT_MARGIN, SIDE_BAR_WIDTH } from '../../constants/styleConstants';
import ApiDataContext from '../../context/ApiDataContext';
import Loading from '../General/Loading';

const useStyles = makeStyles({
    container: {
        maxWidth: `calc(100vw - ${SIDE_BAR_WIDTH}px - ${DEFAULT_MARGIN}px)`,
        marginLeft: DEFAULT_MARGIN,
        marginRight: DEFAULT_MARGIN,
    },
    table: {
        minWidth: 500,
    },
    tablePagination: {
        position: 'static'
    }
});

const rowsPerPageList = [10, 25, 50];

const CustomTable = ({ tableType }) => {
    const classes = useStyles();

    const {
        filteredData,
        filters,
        isLoading,
        isError,
        errorMessage,
        errorCode
    } = useContext(ApiDataContext);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    const tableHeaders = TABLE_HEADERS[tableType];

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        setPage(0);
    }, [filters]);

    if (isLoading) {
        return (
            <TableContainer component={Paper} classes={{ root: classes.container }}>
                <Loading/>
            </TableContainer>
        )
    }

    // TODO - create error handling component
    if (isError) {
        return (
            <TableContainer component={Paper} classes={{ root: classes.container }}>
                <div>{errorCode}: {errorMessage}</div>;
            </TableContainer>
        )
    }

    return (
        <TableContainer component={Paper} classes={{ root: classes.container }}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TablePagination classes={{ toolbar: classes.tablePagination }}
                            rowsPerPageOptions={rowsPerPageList}
                            count={filteredData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            scope='row'
                            colSpan={tableHeaders.length}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        {tableHeaders.map((header, idx) => (
                            <TableCell key={idx} align={"left"}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : filteredData
                    ).map((row) => (
                        <TableRow key={row.id}>
                            {DRINK_FIELDS[tableType].map((field, idx) => (
                                <CollapsibleTextCell key={idx} text={row[field]} />
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

export default React.memo(CustomTable);