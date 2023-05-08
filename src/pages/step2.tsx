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
import { useNavigate } from 'react-router-dom';
import { AppForm } from '../components/app-form';
import { PrimaryButton } from '../components/primary-button';
import { floors, towers } from '../mock-data';
import { schemaForStep2 } from '../utils/yup';
import { useAppDispatch, useAppSelector } from '../hooks';
import { saveDataStep2 } from '../store/slice/dataSlice';
import { InputsStep2 } from '../types/steps';

const Step2 = () => {
	const { floorNumber, towerType, description } = useAppSelector(
		(state) => state.data
	);

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<InputsStep2>({
		mode: 'onBlur',
		defaultValues: { floorNumber, towerType, description },
		resolver: yupResolver(schemaForStep2)
	});

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = (data: InputsStep2) => {
		dispatch(saveDataStep2(data));
		navigate('/step3');
	};

	return (
		<>
			<Typography variant='h5'>🏛️Шаг 2</Typography>
			<AppForm onSubmit={handleSubmit(onSubmit)} noValidate>
				<Box>
					<FormControl fullWidth>
						<Controller
							control={control}
							name='towerType'
							render={({ field: { onChange, value } }) => (
								<TextField
									margin='normal'
									select
									label='Выберите тип башни'
									error={!!errors.towerType}
									onChange={onChange}
									value={value}
									helperText={errors?.towerType?.message}
								>
									{towers.map((tower) => {
										return (
											<MenuItem
												value={tower.id}
												key={tower.id}
											>
												{tower.name}
											</MenuItem>
										);
									})}
								</TextField>
							)}
						/>
						<Controller
							control={control}
							name='floorNumber'
							render={({ field: { onChange, value } }) => (
								<TextField
									margin='normal'
									select
									label='Выберите этаж'
									onChange={onChange}
									value={value}
									error={!!errors.floorNumber}
									helperText={errors?.floorNumber?.message}
								>
									{floors.map((floor) => {
										return (
											<MenuItem
												value={floor.id}
												key={floor.id}
											>
												{floor.name}
											</MenuItem>
										);
									})}
								</TextField>
							)}
						/>

						<Controller
							control={control}
							name='description'
							render={({ field: { onChange, value } }) => (
								<TextField
									margin='normal'
									id='outlined-textarea'
									label='Комментарий (опционально)'
									placeholder='максимальная длина 150 символов'
									multiline
									onChange={onChange}
									value={value}
									rows={4}
									fullWidth
									inputProps={{ maxLength: 150 }}
								/>
							)}
						/>
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

export default Step2;
