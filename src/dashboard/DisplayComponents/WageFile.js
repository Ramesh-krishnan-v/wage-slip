import React from 'react';
import { Grid, Paper, Typography, TextField } from '@mui/material';

export default function WageFile({ employeeName, startDate, endDate, hoursWorked, hourlyRate, totalAmount }) {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={10}>
                <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        FORM No. XXVIII
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                        (See Rule 78 (1) (b) of Tamil Nadu Contract Labour (Regulation and Abolition) Rules, 1975)
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <label htmlFor="name">Name:</label>
      </Grid>
      <Grid item xs={9}>
      <TextField id="standard-basic"  variant="standard" />
      </Grid>
    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Employee Name: {employeeName}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Start Date: {startDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                End Date: {endDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Hours Worked: {hoursWorked}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Hourly Rate: {hourlyRate}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Total Amount: {totalAmount}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

