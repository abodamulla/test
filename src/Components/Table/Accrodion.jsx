import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filtering from './Filtering';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        
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
}));

export default function ControlledAccordions() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion expanded={true}>
                <AccordionSummary
                    expandIcon={<FilterListIcon className={`${classes.filterIcon}`} />}
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Filtering />
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}
