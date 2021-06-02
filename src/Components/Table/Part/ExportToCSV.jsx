import React from 'react'
import { Button } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/styles';
import rows, { headers } from './TableData'
import { CSVLink } from 'react-csv';

const useStyles = makeStyles(() => ({
    icon: {
        marginRight: 10,
    },
}));


function ExportToCSV() {
    const classes = useStyles();

    const CSV_Report = {
        filename: 'Report.csv',
        headers : headers,
        data    : rows,
    }

    return (
        <CSVLink
            {...CSV_Report}
            style={{
                textDecoration: 'none',
            }}
        >
            <Button
                color='primary'
                variant='contained'
                className={`${classes.btn}`}
                fullWidth
            >
                <GetAppIcon
                    className={`${classes.icon}`}
                />
                CSV
            </Button>
        </CSVLink>
    )
}

export default ExportToCSV
