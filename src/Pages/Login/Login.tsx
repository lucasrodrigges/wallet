import React from 'react';

import {FormControl, Input, Paper, TextField} from '@mui/material';
import {Box} from '@mui/system';

export default function Login() {
	return (
		<Paper >
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					'& > :not(style)': {m: 1},
				}}
			>
				<TextField
					id='demo-helper-text-misaligned'
					label='First Name'
					sx={{width: '100%'}}
				/>
				<TextField
					label='Last Name'
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					'& > :not(style)': {m: 1},
				}}
			>
				<TextField
					id='demo-helper-text-misaligned'
					label='Email'
				/>
			</Box>
		</Paper>
	);
}
