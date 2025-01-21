import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appointment } from '../../types';

interface AppointmentState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    updateAppointmentStatus: (state, action: PayloadAction<{
      id: string;
      status: 'scheduled' | 'completed' | 'cancelled';
    }>) => {
      const appointment = state.appointments.find(a => a.id === action.payload.id);
      if (appointment) {
        appointment.status = action.payload.status;
      }
    },
  },
});

export const { addAppointment, updateAppointmentStatus } = appointmentSlice.actions;
export default appointmentSlice.reducer;