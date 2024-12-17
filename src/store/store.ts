import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userActionSlice from './slices/userActionSlice'

const rootReducer = combineReducers({ userActionSlice })

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
