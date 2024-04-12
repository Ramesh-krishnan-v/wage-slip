import * as React from 'react';
import { createTheme } from '@mui/material/styles';

import {Box, Toolbar, List, Divider, IconButton, Container, Grid, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


const defaultTheme = createTheme();

export default function TabelView({displayData}) {
    
const handlePrint = () => {
  const printContents = document.getElementById('table-to-print').outerHTML;
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print</title>');
  printWindow.document.write('<style>');
  printWindow.document.write('table { border-collapse: collapse; width: 100%; }');
  printWindow.document.write('th, td { border: 1px solid black; padding: 8px; }');
  printWindow.document.write('tr:nth-child(even) { background-color: #f2f2f2; }'); // Optional: Even rows have a background color
  printWindow.document.write('</style></head><body>');
  printWindow.document.write(printContents);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
};


//   const handleDownloadPDF = () => {
//     const input = document.getElementById('table-to-print');
  
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF('p', 'mm', 'a4');
//         const imgWidth = 280; // A4 width in mm
//         const imgHeight = canvas.height * imgWidth / canvas.width;
//         const maxHeight = 297; // A4 height in mm
  
//         let startY = 0;
//         let remainingHeight = imgHeight;
//         let pageIndex = 0;
  
//         // Function to add a page and continue processing after a delay
//         const addPageWithDelay = () => {
//           setTimeout(() => {
//             pdf.addPage();
//             pageIndex++;
//             startY = 0;
//             // Reset the remaining height for the new page
//             remainingHeight = imgHeight;
//             // Move the cursor to the next page
//             pdf.setPage(pageIndex + 1);
//             processNextChunk();
//           }, 100); // Adjust delay as needed
//         };
  
//         // Function to process next chunk of the table content
//         const processNextChunk = () => {
//           // Iterate over each chunk of the table content that fits on one page
//           while (remainingHeight > 0) {
//             const ratio = Math.min(1, maxHeight / remainingHeight);
//             pdf.addImage(imgData, 'PNG', 0, startY, imgWidth, remainingHeight * ratio);
//             remainingHeight -= maxHeight;
//             startY -= maxHeight;
  
//             // If there is more content to print, add a new page
//             if (remainingHeight > 0) {
//               addPageWithDelay();
//               return; // Exit the loop to wait for the delay
//             }
//           }
  
//           // If all content is processed, save the PDF
//           pdf.save('table.pdf');
//         };
  
//         // Start processing the first chunk
//         processNextChunk();
//       });
// };

  
const CustomTableCell = ({ children, ...props }) => {
  return (
    <TableCell align="right" style={{ borderRight: '1px solid #e0e0e0' }} {...props}>
      {children}
    </TableCell>
  );
};

  return (
    <>
    <Button variant="contained" onClick={handlePrint} sx={{ marginBottom: '1rem' }}>
        Print Table
      </Button>
      {/* <Button variant="contained" onClick={handleDownloadPDF} sx={{ marginBottom: '1rem' }}>
        Download PDF
      </Button> */}
      <Box sx={{ display: 'flex' }}>
       
      <div id="table-to-print">         
        <TableContainer   > 
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <CustomTableCell>Sr</CustomTableCell>
                <CustomTableCell >HRMSID</CustomTableCell>
                <CustomTableCell >FNAME</CustomTableCell>
                <CustomTableCell >DAYS</CustomTableCell>
                <CustomTableCell >OT</CustomTableCell>
                <CustomTableCell >BASIC</CustomTableCell>
                <CustomTableCell >HRA</CustomTableCell>
                <CustomTableCell >PH</CustomTableCell>
                <CustomTableCell >OT</CustomTableCell>
                <CustomTableCell >TOTALLOW</CustomTableCell>
                <CustomTableCell >PFEMPL</CustomTableCell>
                <CustomTableCell >ESIEMPL</CustomTableCell>
                <CustomTableCell >PTAX</CustomTableCell>
                <CustomTableCell >ADV</CustomTableCell>
                <CustomTableCell >LUN</CustomTableCell>
                <CustomTableCell >TIFN</CustomTableCell> 
                <CustomTableCell >SHOE</CustomTableCell>
                <CustomTableCell >RENT</CustomTableCell>
                <CustomTableCell >DED</CustomTableCell>
                <CustomTableCell >TDED</CustomTableCell> 
                <CustomTableCell >NET</CustomTableCell>     
              </TableRow>
            </TableHead>
            <TableBody>
              {displayData?.map((d) => (
                <TableRow
                  key={d.Sr}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <CustomTableCell component="th" scope="row">{d.Sr}</CustomTableCell>
                  <CustomTableCell >{d?.HRMSID}</CustomTableCell>
                  <CustomTableCell >{d?.FNAME}</CustomTableCell>
                  <CustomTableCell >{Math.round(d?.DAYS)}</CustomTableCell>
                  <CustomTableCell >{Math.round(d?.OT_1 * 100) / 100}</CustomTableCell>                 
                  <CustomTableCell >{d?.BASIC}</CustomTableCell>                 
                  <CustomTableCell >{d?.HRA}</CustomTableCell>
                  <CustomTableCell >{d?.PH}</CustomTableCell>                 
                  <CustomTableCell >{d?.OT_2}</CustomTableCell>
                  <CustomTableCell >{d?.TOTALLOW}</CustomTableCell>
                  <CustomTableCell >{d?.PFEMPL}</CustomTableCell>
                  <CustomTableCell >{d?.ESIEMPL}</CustomTableCell>
                  <CustomTableCell >{d?.PTAX}</CustomTableCell>
                  <CustomTableCell >{d?.ADV}</CustomTableCell>
                  <CustomTableCell >{d?.LUN}</CustomTableCell>
                  <CustomTableCell >{d?.TIFN}</CustomTableCell> 
                  <CustomTableCell >{d?.SHOE}</CustomTableCell>
                  <CustomTableCell >{d?.RENT}</CustomTableCell>
                  <CustomTableCell >{d?.DED}</CustomTableCell>
                  <CustomTableCell >{d?.TDED}</CustomTableCell> 
                  <CustomTableCell >{Math.round(d?.NET)}</CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </Box>
      </>
  );
}
