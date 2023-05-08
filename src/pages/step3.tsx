import React from 'react';
import {
	Box,
	FormControl,
	MenuItem,
	TextField,
	Typography
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AppForm } from '../components/app-form';
import { PrimaryButton } from '../components/primary-button';
import { schemaForStep3 } from '../utils/yup';
import { useAppDispatch, useAppSelector } from '../hooks';
import { rooms } from '../mock-data';
import { saveDataStep3 } from '../store/slice/dataSlice';
import { InputsStep3 } from '../types/steps';

const Step3 = () => {
	const { date, startTime, endTime, meetingRoom } = useAppSelector(
		(state) => state.data
	);

	const {
		handleSubmit,
		watch,
		control,
		formState: { errors }
	} = useForm<InputsStep3>({
		mode: 'onBlur',
		defaultValues: {
			date: date !== '' ? dayjs(date) : '',
			startTime: startTime !== '' ? dayjs(startTime) : '',
			endTime: endTime !== '' ? dayjs(endTime) : '',
			meetingRoom
		},
		resolver: yupResolver(schemaForStep3)
	});

	const hasDate = watch('date');
	const hasStartTime = watch('startTime');
	const hasEndTime = watch('endTime');

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = (data: InputsStep3) => {
		const obj = {
			date: dayjs(data.date).toJSON(),
			endTime: dayjs(data.endTime).toJSON(),
			startTime: dayjs(data.startTime).toJSON(),
			meetingRoom: data.meetingRoom
		};
		dispatch(saveDataStep3(obj));
		navigate('/result');
	};

	return (
		<>
			<Typography variant='h5'>🕗Шаг 3</Typography>
			<AppForm onSubmit={handleSubmit(onSubmit)} noValidate>
				<Box>
					<FormControl fullWidth>
						<Controller
							name='date'
							control={control}
							rules={{ required: true }}
							render={({ field: { onChange, value } }) => (
								<DatePicker
									value={value || null}
									onChange={onChange}
									disablePast
									label='Выберите дату'
									sx={{ mt: '15px' }}
								/>
							)}
						/>
						<Box sx={{ display: 'flex', mt: '10px' }}>
							<Controller
								control={control}
								name='startTime'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => (
									<TimePicker
										sx={{ marginRight: '5px' }}
										onChange={onChange}
										value={value || null}
										label='Время начала'
										minTime={dayjs(new Date(0, 0, 0, 8))}
										maxTime={dayjs(
											new Date(0, 0, 0, 18, 45)
										)}
										timeSteps={{
											hours: 2,
											minutes: 30,
											seconds: 1
										}}
									/>
								)}
							/>
							<Controller
								control={control}
								name='endTime'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => (
									<TimePicker
										sx={{ marginLeft: '5px' }}
										onChange={onChange}
										value={value || null}
										label='Время конца'
										minTime={dayjs(new Date(0, 0, 0, 8))}
										maxTime={dayjs(
											new Date(0, 0, 0, 18, 45)
										)}
										timeSteps={{
											hours: 2,
											minutes: 30,
											seconds: 1
										}}
									/>
								)}
							/>
						</Box>

						{hasDate && hasStartTime && hasEndTime && (
							<Controller
								control={control}
								name='meetingRoom'
								render={({ field: { onChange, value } }) => (
									<TextField
										margin='normal'
										select
										label='Выберите номер комнаты'
										onChange={onChange}
										value={value}
										error={!!errors.meetingRoom}
										helperText={
											errors?.meetingRoom?.message
										}
									>
										{rooms.map((room) => {
											return (
												<MenuItem
													value={room.id}
													key={room.id}
												>
													{room.name}
												</MenuItem>
											);
										})}
									</TextField>
								)}
							/>
						)}
					</FormControl>

					<PrimaryButton
						variant='contained'
						type='submit'
						fullWidth
						color='primary'
					>
						Продолжить
					</PrimaryButton>
				</Box>
			</AppForm>
		</>
	);
};

export default Step3;
