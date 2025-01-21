import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Lawyer } from '../types';
import { Calendar, Clock, IndianRupee, Languages, Award, BookOpen } from 'lucide-react';
import BookingModal from './BookingModal';

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <img
            src={lawyer.imageUrl}
            alt={lawyer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{lawyer.name}</h3>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {lawyer.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Award className="h-4 w-4 mr-2" />
              <span>{lawyer.experience} years experience</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Languages className="h-4 w-4 mr-2" />
              <span>{lawyer.languages.join(', ')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <IndianRupee className="h-4 w-4 mr-2" />
              <span>₹{lawyer.costPerAppointment} per consultation</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm">{lawyer.education}</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lawyer={lawyer}
      />
    </>
  );
};

export default LawyerCard;