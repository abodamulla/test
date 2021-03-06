import React from 'react'
import { Link } from 'react-router-dom';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    // Button
} from '@material-ui/core';

import {
    Edit,
} from '@material-ui/icons'

import { statusType } from './TableData';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
        cursor: 'default',
    },
});


function MyTable(props) {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table id="MyyTable" className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Event Time</TableCell>
                        <TableCell align="center">LCode</TableCell>
                        <TableCell align="center">Length Of Stay</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">last Name</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Parq Quote ID</TableCell>
                        <TableCell align="center">Desired Delivery Date</TableCell>
                        <TableCell align="center">Brand</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Type Of Job</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.newRows.map((row) => (
                        <StyledTableRow key={row.id} id={row.id}>
                            <StyledTableCell component="th" scope="row">{row.eventTime}</StyledTableCell>
                            <StyledTableCell align="center">{row.lCode}</StyledTableCell>
                            <StyledTableCell align="center">{row.lengthOfStay}</StyledTableCell>
                            <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                            <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                            <StyledTableCell align="center">{row.phone}</StyledTableCell>
                            <StyledTableCell align="center">{row.parqQuoteID}</StyledTableCell>
                            <StyledTableCell align="center">{row.desiredDeliveryDate}</StyledTableCell>
                            <StyledTableCell align="center">{row.brand}</StyledTableCell>
                            <StyledTableCell align="center">{row.city}</StyledTableCell>
                            <StyledTableCell align="center">{row.typeOfJob}</StyledTableCell>
                            <StyledTableCell align="center">{statusType(row.status)}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Link
                                    to={{
                                        pathname: "/Edit",
                                        state: (row)
                                    }}
                                >
                                    <Edit color='primary' />
                                </Link>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MyTable