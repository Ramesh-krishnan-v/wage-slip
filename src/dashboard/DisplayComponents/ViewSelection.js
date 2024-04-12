import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Paper, Grid} from '@mui/material'
import TableView from './TableView';
import WageView from './WageView';
export default function RowRadioButtonsGroup({ displayData }) {
	const [value, setValue] = React.useState('');
	const [dates, setDates] = React.useState(null);
	const handleRadioChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Grid sx={{ml: 1, mr: 2}}>
			<Paper
				sx={{
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					overflow: 'auto',
				}}
			>
				<FormControl>
					<FormLabel id="demo-row-radio-buttons-group-label">Select view type</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						defaultValue="tabel"
						onChange={handleRadioChange}
					>
						<FormControlLabel value="tabel" control={<Radio />} label="Tabel" />
						<FormControlLabel value="wage" control={<Radio />} label="wage" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</Paper>
			{
				(value != '') &&
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						overflow: 'auto',
						mt: 2
					}}
				>
					{
						(value === 'tabel') &&
						<TableView displayData={displayData} />
					}
					{
						(value === 'wage') &&
						<WageView displayData={displayData} setDates={setDates} dates={dates} />
					}
					
				</Paper>
			}

		</Grid>

	);
}
