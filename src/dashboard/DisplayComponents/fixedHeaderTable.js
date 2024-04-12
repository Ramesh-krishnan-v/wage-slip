import * as React from 'react';
import { createTheme } from '@mui/material/styles';

import {Box, Toolbar, List, Divider, IconButton, Container, Grid, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

import { TableVirtuoso } from 'react-virtuoso';

const defaultTheme = createTheme();

export default function ViewSelection({displayData}) {
console.log("displayData", displayData)



const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow sx={{
      backgroundColor: 'red',
    }}>
                <TableCell style={{ width: 60 }}  >Sr</TableCell>
                <TableCell style={{ width: 80 }}>HRMSID</TableCell>
                <TableCell style={{ width: 160 }}>FNAME</TableCell>
                <TableCell style={{ width: 110 }}>DAYS</TableCell>
                <TableCell style={{ width: 50 }}>OT</TableCell>
                <TableCell style={{ width: 90 }}>BASIC</TableCell>
                <TableCell style={{ width: 80 }}>HRA</TableCell>
                <TableCell style={{ width: 70 }}>PH</TableCell>
                <TableCell style={{ width: 50 }}>OT</TableCell>
                <TableCell style={{ width: 90 }}>TOTALLOW</TableCell>
                <TableCell style={{ width: 90 }}>PFEMPL</TableCell>
                <TableCell style={{ width: 90 }}>ESIEMPL</TableCell>
                <TableCell style={{ width: 90 }}>PTAX</TableCell>
                <TableCell style={{ width: 90 }}>ADV</TableCell>
                <TableCell style={{ width: 90 }}>LUN</TableCell>
                <TableCell style={{ width: 90 }}>TIFN</TableCell> 
                <TableCell style={{ width: 90 }}>SHOE</TableCell>
                <TableCell style={{ width: 90 }}>RENT</TableCell>
                <TableCell style={{ width: 90 }}>DED</TableCell>
                <TableCell style={{ width: 90 }}>TDED</TableCell> 
                <TableCell style={{ width: 90 }}>NET</TableCell>     
              </TableRow>
  );
}

function rowContent(_index,) {
  return (
    <React.Fragment>
      {displayData?.map((d) => (
                <TableRow
                  key={d.Sr}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell >
                    {d.Sr}
                  </TableCell>
                  <TableCell align="right" >{d?.HRMSID}</TableCell>
                  <TableCell >{d?.FNAME}</TableCell>
                  <TableCell align="right">{d?.DAYS}</TableCell>
                  <TableCell align="right">{d?.OT}</TableCell>                 
                  <TableCell align="right">{d?.BASIC}</TableCell>                 
                  <TableCell align="right">{d?.HRA}</TableCell>
                  <TableCell align="right">{d?.PH}</TableCell>                 
                  <TableCell align="right">{d?.OT}</TableCell>
                  <TableCell align="right">{d?.TOTALLOW}</TableCell>
                  <TableCell align="right">{d?.PFEMPL}</TableCell>
                  <TableCell align="right">{d?.ESIEMPL}</TableCell>
                  <TableCell align="right">{d?.PTAX}</TableCell>
                  <TableCell align="right">{d?.ADV}</TableCell>
                  <TableCell align="right">{d?.LUN}</TableCell>
                  <TableCell align="right">{d?.TIFN}</TableCell> 
                  <TableCell align="right">{d?.SHOE}</TableCell>
                  <TableCell align="right">{d?.RENT}</TableCell>
                  <TableCell align="right">{d?.DED}</TableCell>
                  <TableCell align="right">{d?.TDED}</TableCell> 
                  <TableCell align="right">{d?.NET}</TableCell>
                </TableRow>
              ))}
    </React.Fragment>
  );
}


  return (
      <Box sx={{ display: 'flex' }}>         
        <Grid item xs={12} md={12} lg={12}>
        <Paper style={{ height: 400, width: '100%' }}>
          <TableVirtuoso
            data={displayData}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
        </Grid>
      </Box>
  );
}
