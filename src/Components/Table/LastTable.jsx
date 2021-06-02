import React, { useState } from 'react'

// Main Part
import { 
    Grid,
    Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

// Accrodion Part
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@material-ui/core';

// Filtering Part
import { 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
} from '@material-ui/core'
import ExportToCSV from './Part/ExportToCSV';
import ExportToPDF from './Part/ExportToPDF';

// Icons Part
import FilterListIcon from '@material-ui/icons/FilterList';

// Other Part
import MyTable from './Part/Table'
import rows from './Part/TableData';

var newRows = []

const useStyles = makeStyles((theme) => ({
    Page: {
        padding: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        cursor: 'default',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    filterIcon: {
        transform: "rotate(180deg)",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        
    },
    filterBtn: {
        marginBottom: 10,
    },
}))


function LastTable() {
    const classes = useStyles()

    const [filter, setFilter] = useState({
        EventDateFrom : '',
        EventDateTo   : '',
        Brand         : '',
        City          : '',
        TypeOfJob     : '',
        Status        : '',
    });
    const { EventDateFrom, EventDateTo, Brand, City, TypeOfJob, Status } = filter
    
    const handleChange = (event) => {
        const { name, value } = event.target
        newRows = []
        setFilter({
            ...filter,
            [name]: value
        });
    };
    
    
        const brandArray       = []
        const cityArray        = []
        const typeOfJobArray   = []
        const statusArray      = []
        
        rows.forEach(newRow => {
            
            if( 
                ( (Brand && newRow.brand === Brand)             || Brand === 'All'     || Brand === '' ) &&
                ( (City && newRow.city === City)                || City === 'All'      || City === '' ) && 
                ( (TypeOfJob && newRow.typeOfJob === TypeOfJob) || TypeOfJob === 'All' || TypeOfJob === '' ) && 
                ( (Status && newRow.status === Status)          || Status === 'All'    || Status === '' ) 
            ){
                newRows.push(newRow)
            }
            
        })
    
        rows.forEach(row => {
            if(brandArray.indexOf(row.brand) === -1) {
                brandArray.push(row.brand);
            }
            if(cityArray.indexOf(row.city) === -1) {
                cityArray.push(row.city);
            }
            if(typeOfJobArray.indexOf(row.typeOfJob) === -1) {
                typeOfJobArray.push(row.typeOfJob);
            }
            if(statusArray.indexOf(row.status) === -1) {
                statusArray.push(row.status);
            }
        })

    return (
        <Grid container spacing={2} className={`${classes.Page}`}>

            {/* Accordion Section */}
            <Grid container item lg={12} md={12} sm={12} xs={12}>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<FilterListIcon className={`${classes.filterIcon}`} />}
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={2}>
            <Grid item lg={2} md={4} sm={4} xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="eventDate">Event Date From</InputLabel>
                    <Select
                        labelId="eventDate"
                        id="EventDate"
                        name="EventDateFrom"
                        value={EventDateFrom}
                        onChange={handleChange}
                    >
                        <MenuItem value='10'>10</MenuItem>
                        <MenuItem value='20'>20</MenuItem>
                        <MenuItem value='30'>30</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={2} md={4} sm={4} xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="eventDate">Event Date To</InputLabel>
                    <Select
                        labelId="eventDate"
                        id="EventDate"
                        name="EventDateTo"
                        value={EventDateTo}
                        onChange={handleChange}
                    >
                        <MenuItem value='10'>10</MenuItem>
                        <MenuItem value='20'>20</MenuItem>
                        <MenuItem value='30'>30</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={2} md={4} sm={4} xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="brand">Brand</InputLabel>
                    <Select
                        labelId="brand"
                        id="Brand"
                        name="Brand"
                        value={Brand}
                        onChange={handleChange}
                    >
                        <MenuItem value='All'>All</MenuItem>
                        {
                            brandArray.map(brand => (
                                <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={2} md={4} sm={4} xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="city">City</InputLabel>
                    <Select
                        labelId="city"
                        id="City"
                        name="City"
                        value={City}
                        onChange={handleChange}
                    >
                        <MenuItem value='All'>All</MenuItem>
                        {
                            cityArray.map(city => (
                                <MenuItem key={city} value={city}>{city}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={2} md={4} sm={4} xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="typeOfJob">Type Of Job</InputLabel>
                    <Select
                        labelId="typeOfJob"
                        id="TypeOfJob"
                        name="TypeOfJob"
                        value={TypeOfJob}
                        onChange={handleChange}
                    >
                        <MenuItem value='All'>All</MenuItem>
                        {
                            typeOfJobArray.map(type => (
                                <MenuItem key={type} value={type}>{type}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={2} md={4} sm={4} xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status"
                        id="Status"
                        name="Status"
                        value={Status}
                        onChange={handleChange}
                    >
                        <MenuItem value='All'>All</MenuItem>
                        {
                            statusArray.map(status => (
                                <MenuItem key={status} value={status}>{status}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            {/* BTN  */}
            <Grid container spacing={3} item lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={8} md={6} sm={8} xs={12}>

                </Grid>
                <Grid item lg={2} md={3} sm={2} xs={12}>
                    <ExportToCSV />
                </Grid>
                <Grid item lg={2} md={3} sm={2} xs={12}>
                    <ExportToPDF />
                </Grid>
            </Grid>

        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid >

            {/* Table Section */}
            <Grid container item lg={12} md={12} sm={12} xs={12}>
                <MyTable newRows={newRows} />
            </Grid >

        </Grid>
    )
}

export default LastTable
