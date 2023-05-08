import { Dayjs } from 'dayjs';

export type InputsStep1 = {
	firstName: string;
	lastName: string;
};

export type InputsStep2 = {
	towerType: string;
	floorNumber: string;
	description: string;
};

export type InputsStep3 = {
	date: Dayjs;
	startTime: Dayjs;
	endTime: Dayjs;
	meetingRoom: string;
};
