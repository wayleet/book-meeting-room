export interface IStep1 {
	firstName: string;
	lastName: string;
}

export interface IStep2 {
	towerType: string;
	floorNumber: string;
	description: string;
}

export interface IStep3 {
	date: string;
	startTime: string;
	endTime: string;
	meetingRoom: string;
}
export interface FormDataState {
	firstName: string;
	lastName: string;
	towerType: string;
	floorNumber: string;
	description: string;
	date: string;
	startTime: string;
	endTime: string;
	meetingRoom: string;
}
