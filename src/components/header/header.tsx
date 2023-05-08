import React from 'react';
import { Typography } from '@mui/material';
import { createStyles } from './styles';

const Header = () => {
	const styles = createStyles();
	return (
		<div>
			<Typography sx={styles.header} variant='h1'>
				The Ultimate Form
			</Typography>
			<Typography sx={styles.header2} variant='h1'>
				To Book A Meeting Room
			</Typography>
		</div>
	);
};

export default Header;
