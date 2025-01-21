import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lawyer } from '../../types';
import { lawyers as initialLawyers } from '../../data/mockData';

interface LawyerState {
  lawyers: Lawyer[];
  selectedLawyer: Lawyer | null;
  loading: boolean;
  error: string | null;
}

const initialState: LawyerState = {
  lawyers: initialLawyers,
  selectedLawyer: null,
  loading: false,
  error: null,
};

const lawyerSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {
    setSelectedLawyer: (state, action: PayloadAction<Lawyer>) => {
      state.selectedLawyer = action.payload;
    },
    updateLawyerAvailability: (state, action: PayloadAction<{ 
      lawyerId: string;
      date: string;
      timeSlot: string;
    }>) => {
      const lawyer = state.lawyers.find(l => l.id === action.payload.lawyerId);
      if (lawyer && lawyer.availability[action.payload.date]) {
        const slot = lawyer.availability[action.payload.date].find(
          s => s.start === action.payload.timeSlot
        );
        if (slot) {
          slot.isBooked = true;
        }
      }
    },
  },
});

export const { setSelectedLawyer, updateLawyerAvailability } = lawyerSlice.actions;
export default lawyerSlice.reducer;