import React, { useState, useRef } from 'react';
import { createTheme } from '@mui/material/styles';
import { Grid, TextField, Button, Pagination } from '@mui/material';
import { Formik, Form } from 'formik'; 
import WageFile from './WageFile';

const defaultTheme = createTheme();

export default function WageView({ displayData, setDates, dates }) {
    const [showWage, setShowWage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; // Two components per page
    const totalPages = Math.ceil(displayData.length / itemsPerPage);
    const pdfRef = useRef();

    const initialValues = {
        date: '',
        wagePeriodFrom: '',
        wagePeriodTo: ''
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    const handleSubmit = (values) => {
        setDates({
            date: formatDate(values.date),
            wagePeriodFrom: formatDate(values.wagePeriodFrom),
            wagePeriodTo: formatDate(values.wagePeriodTo)
        });
        setShowWage(true);
    };


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const renderData = displayData
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((e, index) => {
            const sequentialIndex = (currentPage - 1) * itemsPerPage + index + 1;
            return (
              <WageFile key={sequentialIndex} index={sequentialIndex} wageData={e} dates={dates} />
            );
          });

        const componentRef = useRef();

  const handlePrint = () => {
    const content = componentRef.current.innerHTML;
    const originalDocument = document.body.innerHTML;
    document.body.innerHTML = content;
    window.print();
    document.body.innerHTML = originalDocument;
  };

    return (
        <React.Fragment>
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
                            <Grid ref={pdfRef} sx={{ ml: 1, mr: 2 }}>
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
                <React.Fragment>

                    <Button variant="contained" onClick={handlePrint} sx={{ marginBottom: '1rem' }}>
                        Print Table
                    </Button>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        sx={{ mt: 2 }}
                    />
                     <div ref={componentRef}>

                        {renderData}
                    </div>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        sx={{ mt: 2 }}
                    />
                </React.Fragment>
            )}
        </React.Fragment>
    );
}
