import { createSlice } from '@reduxjs/toolkit'

interface IUserActionState {
	isSheetActive: boolean
}

const initialState: IUserActionState = {
	isSheetActive: false,
}

const userActionSlice = createSlice({
	name: 'userAction',
	initialState,
	reducers: {
		toggleSheet: (state) => {
			state.isSheetActive = !state.isSheetActive
		},
	},
})

export default userActionSlice.reducer

export const { toggleSheet } = userActionSlice.actions
