import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authSlice } from './reducers/authSlice';
import { counterSlice } from './reducers/counterSlice';

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	counter: counterSlice.reducer,
	// [servicesApi.reducerPath]: servicesApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
