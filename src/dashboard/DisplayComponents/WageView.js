import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { Grid, TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik'; // Removed Field and ErrorMessage imports
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import WageFile from './WageFile'
const defaultTheme = createTheme();

export default function WageView({ displayData, setDates, dates }) {
    const [showWage, setShowWage] = React.useState(false);
    const initialValues = {
        date: '',
        wagePeriodFrom: '',
        wagePeriodTo: ''
    };

    const handleSubmit = (values) => {
        console.log(values);
        setDates({ date: values.date, wagePeriodFrom: values.wagePeriodFrom, wagePeriodTo: values.wagePeriodTo });
        setShowWage(true);
    };

    return (
        <React.Fragment> {/* Added a React.Fragment wrapper */}
            {!dates ? (
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};
                        if (!values.date) {
                            errors.date = 'Required';
                        }
                        if (!values.wagePeriodFrom) {
                            errors.wagePeriodFrom = 'Required';
                        }
                        if (!values.wagePeriodTo) {
                            errors.wagePeriodTo = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, handleChange, handleBlur }) => (
                        <Form>
                            <Grid sx={{ ml: 1, mr: 2 }}>
                                <Grid container direction='row' spacing={2}>
                                    <Grid item xs={2}>
                                        <TextField
                                            name="date"
                                            label="Date"
                                            type="date"
                                            fullWidth
                                            value={values.date}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.date && !!errors.date}
                                            helperText={touched.date && errors.date}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            name="wagePeriodFrom"
                                            label="Wage period From"
                                            type="date"
                                            fullWidth
                                            value={values.wagePeriodFrom}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.wagePeriodFrom && !!errors.wagePeriodFrom}
                                            helperText={touched.wagePeriodFrom && errors.wagePeriodFrom}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            name="wagePeriodTo"
                                            label="Wage period To"
                                            type="date"
                                            fullWidth
                                            value={values.wagePeriodTo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.wagePeriodTo && !!errors.wagePeriodTo}
                                            helperText={touched.wagePeriodTo && errors.wagePeriodTo}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item xs={6} alignItems='center' justifyContent='flex-end'>
                                        <Button size="large" color="error" variant="outlined" type="reset">Clear</Button>
                                        <Button size="large" color="success" variant="outlined" sx={{ ml: 1 }} type="submit">Confirm</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            ) : (
                <WageFile displayData={displayData} dates={dates}/>
            )}
        </React.Fragment>
    );
}
