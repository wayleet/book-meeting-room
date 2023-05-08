import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { AppForm } from '../components/app-form';
import { PrimaryButton } from '../components/primary-button';
import { schemaForStep1 } from '../utils/yup';
import { useAppDispatch, useAppSelector } from '../hooks';
import { saveDataStep1 } from '../store/slice/dataSlice';
import { InputsStep1 } from '../types/steps';

const Step1 = () => {
	const { firstName, lastName } = useAppSelector((state) => state.data);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InputsStep1>({
		defaultValues: { firstName, lastName },
		mode: 'onBlur',
		resolver: yupResolver(schemaForStep1)
	});

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = (data: InputsStep1) => {
		dispatch(saveDataStep1(data));
		navigate('/step2');
	};
	return (
		<>
			<Typography variant='h5'>🚪Шаг 1</Typography>
			<AppForm onSubmit={handleSubmit(onSubmit)}>
				<TextField
					variant='outlined'
					margin='normal'
					label='Имя'
					placeholder='Введите ваше имя'
					fullWidth
					error={!!errors.firstName}
					helperText={errors?.firstName?.message}
					{...register('firstName')}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					label='Фамилия'
					placeholder='Введите вашу фамилию'
					fullWidth
					error={!!errors.lastName}
					helperText={errors?.lastName?.message}
					{...register('lastName')}
				/>
				<PrimaryButton
					variant='contained'
					type='submit'
					fullWidth
					color='primary'
				>
					продолжить
				</PrimaryButton>
			</AppForm>
		</>
	);
};

export default Step1;
