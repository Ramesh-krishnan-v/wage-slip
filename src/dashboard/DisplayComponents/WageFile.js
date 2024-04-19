import React, {useRef} from 'react';
import { Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';

import { styled } from '@mui/system';

const SubTitleGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
});

const SubtitleTypography = styled(Typography)({
    marginRight: '1rem', // Assuming you want 1 rem margin
});

const GridVerticalBorder = styled(Grid)({
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    justifyContent: 'center',
    alignItems: 'center'
});

export default function WageFile({ wageData, dates, index }) {
    const handleSubmit = (values) => {

    };

    return (

        <Formik
            // initialValues={initialValues}
            validate={(values) => {
                const errors = {};
               
                return errors;
            }}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form>            
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
                                        {/* Date */}
                                        <Grid container item xs={12} justifyContent='flex-end'>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" align="center" gutterBottom>
                                                    Date : {dates.date}
                                                </Typography>
                                            </Grid>
                                        </Grid>                                    
                                        <Grid container spacing={2} display= "flex" justifyContent='flex-start' ml={2}>
                                            <Grid item xs={6}>
                                                <Typography variant="subtitle1" >
                                                        1. Name and Address of the Establishment: 
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>                                        
                                                <TextField id="standard-basic" fullWidth variant="standard" value={wageData?.CONTR_NAME}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="subtitle1"  >
                                                        2. Name of the Workman : 
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>                                        
                                                <TextField id="standard-basic" fullWidth variant="standard" name='fname' value={wageData?.FNAME}/>
                                            </Grid>
                                            <Grid container item xs={6}>
                                                <Grid item xs={6}>   
                                                    <Typography variant="subtitle1"  >
                                                        3. Father's / Husbans'Name : 
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>                                        
                                                    <TextField id="standard-basic" fullWidth variant="standard" />
                                                </Grid>
                                            </Grid>
                                            <Grid container item xs={6}>
                                                <Grid item xs={4}>   
                                                    <Typography variant="subtitle1"  >
                                                            4. Designation : 
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={8}>                                        
                                                    <TextField id="standard-basic" fullWidth variant="standard" />
                                                </Grid>
                                            </Grid>
                                            <Grid container item xs={6}>
                                                <Grid item xs={6}>   
                                                    <Typography variant="subtitle1"  >
                                                            5. Date in Entry into Service : 
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>                                        
                                                    <TextField id="standard-basic" fullWidth variant="standard" />
                                                </Grid>
                                            </Grid>
                                            {/* Wage period form */}
                                            <Grid container item xs={6}>
                                                <Grid container item xs={12}>   
                                                    <Grid item xs={5}>   
                                                        <Typography variant="subtitle1"  >
                                                            6. Wage period : From :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>                                        
                                                        <TextField id="standard-basic" fullWidth variant="standard" value={dates.wagePeriodFrom} />
                                                    </Grid>
                                                    <Grid item xs={1}>   
                                                        <Typography variant="subtitle1"  >
                                                            To :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>                                        
                                                        <TextField id="standard-basic" fullWidth variant="standard" value={dates.wagePeriodTo} />
                                                    </Grid>
                                                </Grid>                                                                                     
                                            </Grid>

                                            {/* WAGE TABEL */}
                                            <Grid container item xs={4}>
                                                <Grid container item xs={12}>   
                                                    <Grid item xs={12}>   
                                                        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                            6. Wages Earned:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container item xs={12}>   
                                                        <Grid item xs={5}>
                                                        </Grid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                                                Rs:
                                                            </Typography>
                                                        </Grid>

                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                            P
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5} >
                                                            <SubtitleTypography variant="subtitle2">
                                                            (a) Basic:
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.BASIC}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1" >
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5}>
                                                            <SubtitleTypography variant="subtitle2">
                                                            (b) D.A :
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {Math.round(wageData?.DA * 100) / 100 ?? ""}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle2">
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5}>
                                                            <SubtitleTypography variant="subtitle2">
                                                            (c) HRA:
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.HRA ? Math.round(wageData?.HRA * 100) / 100 : ""} 
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5}>
                                                            <SubtitleTypography variant="subtitle2">
                                                            (d) O.T. Wages:
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.OT_2 ? Math.round(wageData?.OT_2 * 100) / 100 : ""}  
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5}>
                                                            <SubtitleTypography variant="subtitle2">
                                                            (e) Leave Wages:
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.PH ? Math.round(wageData?.PH * 100) / 100 : ""} 
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5}>
                                                            <SubtitleTypography variant="subtitle2">
                                                            (f) Other Allowances:
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={5}>
                                                            <SubtitleTypography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                                                            (g) Gross Wages:
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.TOTALLOW ? Math.round(wageData?.TOTALLOW * 100) / 100 : ""} 
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>                                                    
                                                    </Grid>
                                                    
                                                </Grid>                                                                                     
                                            </Grid>

                                            {/* tOTAL 7, 4, 1 is the alignment */}
                                            <Grid container item xs={7}>
                                                <Grid container item xs={12}>    
                                                    <Grid container item xs={12} mt={3}>   
                                                        <Grid item xs={7}>
                                                        </Grid>
                                                        <Grid item xs={4} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                                                Rs:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                            P
                                                            </Typography>
                                                        </Grid>
                                                        <SubTitleGrid item xs={7} >
                                                            <SubtitleTypography variant="subtitle2"  style={{ fontWeight: 'bold' }}>
                                                            (g) Gross Wages :
                                                            </SubtitleTypography>
                                                        </SubTitleGrid>
                                                        <GridVerticalBorder item xs={4}style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.TOTALLOW ? Math.round(wageData?.TOTALLOW * 100) / 100 : ""}                                                 
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                        <GridVerticalBorder item xs={1} >
                                                            <Typography variant="subtitle1" >                                                         
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                    </Grid>
                                                    <Grid container item xs={12}>
                                                        <Grid container item xs={7}>
                                                            <SubTitleGrid item xs={5}>
                                                                <SubtitleTypography variant="subtitle2" >
                                                                    Deductions :
                                                                </SubtitleTypography>
                                                            </SubTitleGrid>
                                                            <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                                                    Rs:
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                                    P
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>                                                   
                                                        <GridVerticalBorder item xs={4}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                        <GridVerticalBorder item xs={1} >
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>                                              
                                                    </Grid>

                                                    <Grid container item xs={12}>
                                                        <Grid container item xs={7}>
                                                            <SubTitleGrid item xs={5}>
                                                                <SubtitleTypography variant="subtitle2" >
                                                                    (i) E.P.F :
                                                                </SubtitleTypography>
                                                            </SubTitleGrid>
                                                            <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" >
                                                                    {wageData?.PFEMPL ? Math.round(wageData?.PFEMPL * 100) / 100 : ""} 
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                                    
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>                                                   
                                                        <GridVerticalBorder item xs={4} >
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                        <GridVerticalBorder item xs={1} >
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>                                                   
                                                    </Grid>

                                                    <Grid container item xs={12}>
                                                        <Grid container item xs={7}>
                                                            <SubTitleGrid item xs={5}>
                                                                <SubtitleTypography variant="subtitle2" >
                                                                    (ii) E.S.I :
                                                                </SubtitleTypography>
                                                            </SubTitleGrid>
                                                            <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1">
                                                                    {wageData?.ESIEMPL ? Math.round(wageData?.ESIEMPL * 100) / 100 :  ""}  
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                                    
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>                                                   
                                                        <GridVerticalBorder item xs={4}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                        <GridVerticalBorder item xs={1}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>                                                   
                                                    </Grid>

                                                    <Grid container item xs={12}>
                                                        <Grid container item xs={7}>
                                                            <SubTitleGrid item xs={5}>
                                                                <SubtitleTypography variant="subtitle2" >
                                                                    (iii) Other deductions :
                                                                </SubtitleTypography>
                                                            </SubTitleGrid>
                                                            <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1">
                                                                    {wageData?.PTAX ? Math.round(wageData?.PTAX * 100) / 100 : ""}  
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                                    
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>                                                   
                                                        <GridVerticalBorder item xs={4}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                        <GridVerticalBorder item xs={1}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>                                                   
                                                    </Grid>

                                                    <Grid container item xs={12}>
                                                        <Grid container item xs={7}>
                                                            <SubTitleGrid item xs={5}>
                                                                <SubtitleTypography variant="subtitle2" >
                                                                    Total Deductions :
                                                                </SubtitleTypography>
                                                            </SubTitleGrid>
                                                            <Grid item xs={6} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1">
                                                                    {wageData?.DED ? Math.round(wageData?.DED * 100) / 100 : ""}  
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                                    
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>                                                   
                                                        <GridVerticalBorder item xs={4} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.TDED ? Math.round(wageData?.TDED * 100) / 100 : ""}
                                                            </Typography>
                                                        </GridVerticalBorder>
                                                        <GridVerticalBorder item xs={1}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </GridVerticalBorder>                                                   
                                                    </Grid>


                                                    <Grid container item xs={12}>
                                                        <SubTitleGrid container item xs={7}>                                                   
                                                            <SubtitleTypography variant="subtitle2" >
                                                                Net Amount Paid :
                                                            </SubtitleTypography>                                                        
                                                        </SubTitleGrid>                                                   
                                                        <Grid item xs={4} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                                {wageData?.NET ? Math.round(wageData?.NET * 100) / 100 : ""}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant="subtitle1">
                                                            
                                                            </Typography>
                                                        </Grid>                                                   
                                                    </Grid>
                                                    
                                                </Grid>                                                                                     
                                            </Grid>

                                            <Grid container item xs ={12} mt={10}>
                                                <Grid item xs={1}/>
                                                <Grid item xs={5} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                                    <Typography variant="subtitle1">
                                                        Signature of the Employer / manager <br/>
                                                        {'\u00A0'} or any other Authorized Person.
                                                    </Typography>

                                                </Grid>
                                                <Grid item xs={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Typography variant="subtitle1">
                                                    {'\u00A0'}{'\u00A0'}Signature or Thumb <br/>
                                                        Impression of the Workman
                                                    </Typography> 
                                                </Grid>
                                                <Grid item xs={1}/>
                                            </Grid>
                                            
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid container justifyContent='flex-end' display='flex' alignItems='center' >
                                        <Grid item>
                                            <Typography variant="subtitle1" align="center" gutterBottom>
                                                {index}
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid >

                        </Grid>
                
                </Form>
            )}
        </Formik>
    );
};

