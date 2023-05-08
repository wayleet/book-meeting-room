import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormDataState, IStep1, IStep2, IStep3 } from '../../types/data';

const initialState: FormDataState = {
	firstName: '',
	lastName: '',
	towerType: '',
	floorNumber: '',
	date: '',
	startTime: '',
	endTime: '',
	meetingRoom: '',
	description: ''
};

export const formDataSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		saveDataStep1: (state, action: PayloadAction<IStep1>) => {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},
		saveDataStep2: (state, action: PayloadAction<IStep2>) => {
			state.towerType = action.payload.towerType;
			state.floorNumber = action.payload.floorNumber;
			state.description = action.payload.description;
		},
		saveDataStep3: (state, action: PayloadAction<IStep3>) => {
			state.date = action.payload.date;
			state.startTime = action.payload.startTime;
			state.endTime = action.payload.endTime;
			state.meetingRoom = action.payload.meetingRoom;
		},
		resetData: (state) => {
			state.firstName = initialState.firstName;
			state.lastName = initialState.lastName;
			state.floorNumber = initialState.floorNumber;
			state.towerType = initialState.towerType;
			state.description = initialState.description;
			state.date = initialState.date;
			state.startTime = initialState.startTime;
			state.endTime = initialState.endTime;
			state.meetingRoom = initialState.meetingRoom;
		}
	}
});

export const { saveDataStep1, saveDataStep2, saveDataStep3, resetData } =
	formDataSlice.actions;

export default formDataSlice.reducer;
