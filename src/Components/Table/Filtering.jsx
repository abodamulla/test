import React, { useState } from 'react'
import { 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import ExportToCSV from './Part/ExportToCSV';
import ExportToPDF from './Part/ExportToPDF';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        
    },
    filterBtn: {
        marginBottom: 10,
    },
}));

function Filtering(props) {
    const classes = useStyles();

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
    )
}
export default Filtering;