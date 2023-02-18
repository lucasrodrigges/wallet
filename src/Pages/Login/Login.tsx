import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {emailRegex} from '../../Utils/Constants/regex';
import {passwordLength} from '../../Utils/Constants/constants';
import {useNavigate} from 'react-router-dom';

export default function Login() {
	const [user, setUser] = useState({
		email: '', password: '',
	});
	// const [errorMessage, setErrorMessage] = useState('');
	const [isDisable, setIsDisable] = useState(true);

	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const {name, value} = e.target;

		setUser({
			...user,
			[name]: value,
		});
	};

	useEffect(() => {
		const {email, password} = user;

		if (!emailRegex.test(email) || password.length < passwordLength) {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
	}, [user]);

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
				</Avatar>
				<Typography component='h1' variant='h5'>
            Sign in
				</Typography>
				<Box component='form' noValidate sx={{mt: 1}}>
					<TextField
						margin='normal'
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						margin='normal'
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						onChange={handleChange}
					/>
					{/* <FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/> */}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						disabled={isDisable}
						sx={{mt: 3, mb: 2}}
					>
              Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
                  Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link variant='body2' onClick={() => {
								navigate('/create-account');
							}}>
								{'Don\'t have an account? Sign Up'}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
