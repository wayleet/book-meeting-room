import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '../header/header';
import { createStyles } from './styles';

const Layout = () => {
	const styles = createStyles();
	return (
		<>
			<Header />
			<Container maxWidth='xs' sx={styles.main}>
				<Outlet />
			</Container>
		</>
	);
};

export default Layout;
