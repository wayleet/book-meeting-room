import * as yup from 'yup';

export const schemaForStep1 = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'В имени не могут быть цифры')
		.required('Имя обязательное поле'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'В фамилии не могут быть цифры')
		.required('Фамилия обязательное поле')
});

export const schemaForStep2 = yup.object().shape({
	towerType: yup.string().required('Тип башни обязательное поле'),
	floorNumber: yup.string().required('Этаж обязательное поле')
});

export const schemaForStep3 = yup.object().shape({
	date: yup.object().required(),
	startTime: yup.object().required(),
	endTime: yup.object().required(),
	meetingRoom: yup.string().required('Номер комнаты обязательное поле')
});
