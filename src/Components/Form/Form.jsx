import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    Grid,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper,
    Typography,
    TextField,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { statusArray } from '../Table/Part/TableData'

const useStyles = makeStyles((theme) => ({
    Page: {
        padding: theme.spacing(4),
        maxWidth: 950,
        margin: '0 auto',
        boxShadow: theme.shadows[5],
        borderRadius: theme.spacing(1)
    },
    Form: {
        marginTop: 10,
        // marginLeft: 10,
    },
    typographyText: {
        color: theme.palette.grey[600],
    },
    desiredDeliveryDateSpan: {
        color: theme.palette.primary.light,
    },
    BTN: {
        marginTop: theme.spacing(2),
        // marginLeft: theme.spacing(1)
    },
    BTL: {
        textDecoration: 'none',
        color: 'white',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },

}))

function Form(props) {
    const classes = useStyles()
    const { state } = props.location

    const [data, setData] = useState({
        language: 'English',
        status: state.status,
        comments: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        });
    };

    const updateChange = (event) => {
        console.log(data)
    }

    return (
        <Grid container spacing={2} component={Paper} className={classes.Page}>

            {/* Header */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.typographyText}>
                    DELIVERY DATE RESTRICTION - <span className={classes.desiredDeliveryDateSpan}>{state.desiredDeliveryDate}</span>
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.typographyText}>
                    1. CLIENT INFO
                </Typography>
            </Grid>
            {/* Header End */}

            {/* Form Start */}
            <Grid container spacing={1} className={`${classes.Form}`}>
                {/* Radio Input Start */}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel required component="legend">Preferred Language</FormLabel>
                        <RadioGroup required row name="language" value={data.language} onChange={handleChange}>
                            <FormControlLabel value="English" control={<Radio />} label="English" />
                            <FormControlLabel value="French" control={<Radio />} label="French" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* Radio Input End */}

                {/* Lead ID Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Lead ID'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                {/* Lead ID End */}

                {/* City Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='City'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.city}
                        />
                    </FormControl>
                </Grid>
                {/* City End */}

                {/* Unit Size Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Unit Size'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                {/* Unit Size End */}

                {/* Parq Quote ID Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Parq Quote ID'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.parqQuoteID}
                        />
                    </FormControl>
                </Grid>
                {/* Parq Quote ID End */}

                {/* Inquiry Type Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Inquiry Type'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                {/* Inquiry Type End */}

                {/* LCode Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='LCode'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.lCode}
                        />
                    </FormControl>
                </Grid>
                {/* LCode End */}

                {/* Brand Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Brand'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.brand}
                        />
                    </FormControl>
                </Grid>
                {/* Brand End */}

                {/* First Name Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='First Name'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.firstName}
                        />
                    </FormControl>
                </Grid>
                {/* First Name End */}

                {/* Last Name Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Last Name'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.lastName}
                        />
                    </FormControl>
                </Grid>
                {/* Last Name End */}

                {/* Phone Number Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Phone Number'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.phoneNumber}
                        />
                    </FormControl>
                </Grid>
                {/* Phone Number End */}

                {/* Email Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Email'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                {/* Email End */}

                {/* Type Of Job Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Type Of Job'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.typeOfJob}
                        />
                    </FormControl>
                </Grid>
                {/* Type Of Job End */}

                {/* Length Of Stay Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Length Of Stay (Cycle)'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            value={state.lengthOfStay}
                        />
                    </FormControl>
                </Grid>
                {/* Length Of Stay End */}

                {/* Delivery Distance Start */}
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label='Delivery Distance (DE)'
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                {/* Delivery Distance End */}

                {/* Free Space Start */}
                <Grid item lg={4}>

                </Grid>
                {/* Free Space Start */}

                {/* Multiple Units Start */}
                <Grid item lg={3} md={12} sm={12} xs={12}>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Multiple Units</FormLabel>
                        <RadioGroup disabled row name="MultipleUnits">
                            <FormControlLabel value="Yes" control={<Radio disabled />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio disabled />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* Multiple Units End */}

                {/* If Yes, how many Start */}
                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <TextField
                        label='If Yes, how many'
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                {/* If Yes, how many End */}

                {/* Free Space Start */}
                <Grid item lg={3}>

                </Grid>
                {/* Free Space Start */}

                {/* Notes Start */}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        variant='filled'
                        label='Notes'
                        disabled
                        fullWidth
                        multiline
                        rows={4}
                    />
                </Grid>
                {/* Notes End */}

                {/* Free Space Start */}
                <Grid item lg={3}>

                </Grid>
                {/* Free Space Start */}

                {/* Status Start */}
                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status"
                        id="Status"
                        name="status"
                        value={data.status}
                        onChange={handleChange}
                        fullWidth
                    >
                        {
                            statusArray.map(status => (
                                <MenuItem key={status} value={status}>{status}</MenuItem>
                            ))
                        }
                    </Select>
                </Grid>
                {/* Status End */}

                {/* Free Space Start */}
                <Grid item lg={3}>

                </Grid>
                {/* Free Space Start */}

                {/* Comments Start */}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        variant='outlined'
                        label='Comments'
                        value={data.comments}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        disabled={data.status === 'Declined - Book For NADD' ? false : true}
                    />
                </Grid>
                {/* Comments End */}

            </Grid>
            {/* Form End */}

            {/* BTN Start */}
            <Grid item lg={9} md={9} sm={12} xs={12}>
                <Button
                    className={classes.BTN}
                    variant='contained'
                    color='secondary'
                    onClick={updateChange}
                    fullWidth
                >
                    UPDATE
                </Button>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <Button
                    className={classes.BTN}
                    variant='contained'
                    color='secondary'
                    fullWidth
                >
                    <Link
                        to='/'
                        className={classes.BTL}
                    >
                        BACK TO LIST
                    </Link>
                </Button>
            </Grid>
            {/* BTN End */}

        </Grid>
    )
}

export default Form
