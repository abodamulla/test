import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MyTable from './Part/Table';
import ControlledAccordions from './Accrodion';

const useStyles = makeStyles({
    Page: {
        padding: 1,
    },
});
function Page() {
    const classes = useStyles()
    return (
        <Grid container spacing={2} className={`${classes.Page}`}>
            <Grid container item lg={12} md={12} sm={12} xs={12}>
                <ControlledAccordions />
            </Grid >
            <Grid container item lg={12} md={12} sm={12} xs={12}>
                <MyTable />
            </Grid >
        </Grid>
    )
}

export default Page
