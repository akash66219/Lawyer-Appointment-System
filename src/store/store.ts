import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './slices/appointmentSlice';
import lawyerReducer from './slices/lawyerSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    lawyers: lawyerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;