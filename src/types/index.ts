export interface Lawyer {
  id: string;
  name: string;
  specialties: string[];
  imageUrl: string;
  experience: number;
  languages: string[];
  availability: {
    [key: string]: TimeSlot[];
  };
  costPerAppointment: number;
  description: string;
  education: string;
  barCouncilNumber: string;
}

export interface TimeSlot {
  start: string;
  end: string;
  isBooked: boolean;
}

export interface Appointment {
  id: string;
  lawyerId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  timeSlot: TimeSlot;
  caseDescription: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}