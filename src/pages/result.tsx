import React, { useState } from 'react';
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useAppDispatch, useAppSelector } from '../hooks';
import { resetData } from '../store/slice/dataSlice';

const Result = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [success, setSuccess] = useState(false);
	const data = useAppSelector((state) => state.data);
	const entries = Object.entries(data);
	const onSubmit = () => {
		console.log(JSON.stringify(data));
		toast('JSON файл готов, посмотреть можете в консоли!');
		setSuccess(true);
		dispatch(resetData());
		setTimeout(() => navigate('/'), 5000);
	};

	if (success) {
		return (
			<>
				<ToastContainer />
				<Confetti />
			</>
		);
	}

	const resetForm = () => {
		dispatch(resetData());
		navigate('/');
	};

	return (
		<>
			<Typography marginBottom='15px' variant='h5'>
				📝Проверка json файла
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Field</TableCell>
							<TableCell align='right'>Value</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{entries.map((entry) => {
							return (
								<TableRow key={entry[0]}>
									<TableCell>{entry[0]}</TableCell>
									<TableCell align='right'>
										{entry[1].toString()}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<Box marginY='10px'>
				<Button onClick={resetForm}>Очистить форму</Button>
				<Button onClick={() => navigate('/')}>Начать сначала</Button>
			</Box>
			<Button variant='contained' type='button' onClick={onSubmit}>
				Вывести в консоль
			</Button>
		</>
	);
};

export default Result;
