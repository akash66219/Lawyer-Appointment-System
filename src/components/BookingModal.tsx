import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Lawyer, TimeSlot } from '../types';
import { addAppointment } from '../store/slices/appointmentSlice';
import { updateLawyerAvailability } from '../store/slices/lawyerSlice';
import { X, Calendar, Clock, IndianRupee } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lawyer: Lawyer;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, lawyer }) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    caseDescription: '',
  });

  const availableDates = Object.keys(lawyer.availability);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appointment = {
      id: Math.random().toString(36).substr(2, 9),
      lawyerId: lawyer.id,
      date: selectedDate,
      timeSlot: lawyer.availability[selectedDate].find(slot => slot.start === selectedTime)!,
      status: 'scheduled' as const,
      ...formData
    };

    dispatch(addAppointment(appointment));
    dispatch(updateLawyerAvailability({
      lawyerId: lawyer.id,
      date: selectedDate,
      timeSlot: selectedTime
    }));

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Book Appointment</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Date</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              >
                <option value="">Choose a date</option>
                {availableDates.map(date => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>

            {selectedDate && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Time</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Choose a time</option>
                  {lawyer.availability[selectedDate]
                    .filter(slot => !slot.isBooked)
                    .map(slot => (
                      <option key={slot.start} value={slot.start}>
                        {slot.start} - {slot.end}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.clientPhone}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Case Description</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={3}
                value={formData.caseDescription}
                onChange={(e) => setFormData({ ...formData, caseDescription: e.target.value })}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>30 minutes consultation</span>
              </div>
              <div className="flex items-center font-medium">
                <IndianRupee className="h-4 w-4 mr-1" />
                <span>₹{lawyer.costPerAppointment}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;