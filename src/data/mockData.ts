import { Lawyer } from '../types';

export const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Adv. Rajesh Kumar',
    specialties: ['Criminal Law', 'Constitutional Law'],
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    experience: 15,
    languages: ['Hindi', 'English', 'Marathi'],
    availability: {
      'Monday': [
        { start: '10:00', end: '10:30', isBooked: false },
        { start: '11:00', end: '11:30', isBooked: false },
        { start: '14:00', end: '14:30', isBooked: false },
      ],
      'Tuesday': [
        { start: '09:00', end: '09:30', isBooked: false },
        { start: '10:00', end: '10:30', isBooked: false },
      ]
    },
    costPerAppointment: 2500,
    description: 'Senior advocate with expertise in criminal and constitutional matters',
    education: 'LLB from National Law School of India University',
    barCouncilNumber: 'MH/1234/2008'
  },
  {
    id: '2',
    name: 'Adv. Priya Sharma',
    specialties: ['Family Law', 'Divorce Law'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    experience: 12,
    languages: ['Hindi', 'English', 'Punjabi'],
    availability: {
      'Monday': [
        { start: '11:00', end: '11:30', isBooked: false },
        { start: '15:00', end: '15:30', isBooked: false },
      ],
      'Wednesday': [
        { start: '10:00', end: '10:30', isBooked: false },
        { start: '14:00', end: '14:30', isBooked: false },
      ]
    },
    costPerAppointment: 3000,
    description: 'Specialized in family matters and matrimonial disputes',
    education: 'LLM from Delhi University',
    barCouncilNumber: 'DL/5678/2011'
  },
  {
    id: '3',
    name: 'Adv. Suresh Mehta',
    specialties: ['Property Law', 'Civil Law'],
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
    experience: 20,
    languages: ['Hindi', 'English', 'Gujarati'],
    availability: {
      'Tuesday': [
        { start: '09:30', end: '10:00', isBooked: false },
        { start: '11:30', end: '12:00', isBooked: false },
      ],
      'Thursday': [
        { start: '14:00', end: '14:30', isBooked: false },
        { start: '16:00', end: '16:30', isBooked: false },
      ]
    },
    costPerAppointment: 3500,
    description: 'Expert in property disputes and civil matters',
    education: 'LLB from Government Law College, Mumbai',
    barCouncilNumber: 'GJ/9012/2003'
  },
  {
    id: '4',
    name: 'Adv. Aisha Khan',
    specialties: ['Corporate Law', 'Intellectual Property Law'],
    imageUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8',
    experience: 8,
    languages: ['English', 'Hindi', 'Urdu'],
    availability: {
      'Monday': [
        { start: '09:00', end: '09:30', isBooked: false },
        { start: '13:00', end: '13:30', isBooked: false },
      ],
      'Friday': [
        { start: '11:00', end: '11:30', isBooked: false },
        { start: '15:00', end: '15:30', isBooked: false },
      ]
    },
    costPerAppointment: 4000,
    description: 'Specializes in startup law and intellectual property rights',
    education: 'LLB from Symbiosis Law School, MBA from IIM Ahmedabad',
    barCouncilNumber: 'KA/4567/2015'
  },
  {
    id: '5',
    name: 'Adv. Vijay Menon',
    specialties: ['Tax Law', 'Banking Law'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    experience: 18,
    languages: ['English', 'Malayalam', 'Tamil'],
    availability: {
      'Wednesday': [
        { start: '10:30', end: '11:00', isBooked: false },
        { start: '14:30', end: '15:00', isBooked: false },
      ],
      'Thursday': [
        { start: '09:30', end: '10:00', isBooked: false },
        { start: '16:30', end: '17:00', isBooked: false },
      ]
    },
    costPerAppointment: 4500,
    description: 'Expert in taxation and banking regulations',
    education: 'LLB from Kerala Law Academy, Chartered Accountant',
    barCouncilNumber: 'KL/7890/2005'
  },
  {
    id: '6',
    name: 'Adv. Meera Reddy',
    specialties: ['Environmental Law', 'Public Interest Litigation'],
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    experience: 10,
    languages: ['English', 'Telugu', 'Kannada'],
    availability: {
      'Tuesday': [
        { start: '11:00', end: '11:30', isBooked: false },
        { start: '15:30', end: '16:00', isBooked: false },
      ],
      'Friday': [
        { start: '10:00', end: '10:30', isBooked: false },
        { start: '14:00', end: '14:30', isBooked: false },
      ]
    },
    costPerAppointment: 3000,
    description: 'Passionate about environmental protection and public interest cases',
    education: 'LLM in Environmental Law from National Law School of India University',
    barCouncilNumber: 'AP/3456/2013'
  },
  {
    id: '7',
    name: 'Adv. Harpreet Singh',
    specialties: ['Labor Law', 'Employment Law'],
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    experience: 14,
    languages: ['English', 'Hindi', 'Punjabi'],
    availability: {
      'Monday': [
        { start: '09:30', end: '10:00', isBooked: false },
        { start: '14:30', end: '15:00', isBooked: false },
      ],
      'Wednesday': [
        { start: '11:30', end: '12:00', isBooked: false },
        { start: '16:30', end: '17:00', isBooked: false },
      ]
    },
    costPerAppointment: 3500,
    description: 'Specialized in employee rights and workplace disputes',
    education: 'LLB from Panjab University, Diploma in Industrial Relations',
    barCouncilNumber: 'PB/6789/2009'
  },
  {
    id: '8',
    name: 'Adv. Zara Syed',
    specialties: ['Immigration Law', 'International Law'],
    imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
    experience: 9,
    languages: ['English', 'Hindi', 'Arabic', 'French'],
    availability: {
      'Thursday': [
        { start: '10:00', end: '10:30', isBooked: false },
        { start: '15:00', end: '15:30', isBooked: false },
      ],
      'Friday': [
        { start: '09:00', end: '09:30', isBooked: false },
        { start: '13:00', end: '13:30', isBooked: false },
      ]
    },
    costPerAppointment: 4000,
    description: 'Expert in immigration and international legal matters',
    education: 'LLB from Faculty of Law, DU, LLM in International Law from Kings College London',
    barCouncilNumber: 'DL/8901/2014'
  },
  {
    id: '9',
    name: 'Adv. Arjun Nair',
    specialties: ['Cyber Law', 'Technology Law'],
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    experience: 7,
    languages: ['English', 'Hindi', 'Malayalam'],
    availability: {
      'Wednesday': [
        { start: '09:00', end: '09:30', isBooked: false },
        { start: '13:30', end: '14:00', isBooked: false },
      ],
      'Thursday': [
        { start: '11:00', end: '11:30', isBooked: false },
        { start: '15:30', end: '16:00', isBooked: false },
      ]
    },
    costPerAppointment: 3500,
    description: 'Specialized in cybercrime and technology-related legal issues',
    education: 'LLB from NLU Delhi, Certified in Cyber Law from Asian School of Cyber Laws',
    barCouncilNumber: 'KA/2345/2016'
  },
  {
    id: '10',
    name: 'Adv. Lakshmi Iyer',
    specialties: ['Medical Law', 'Consumer Protection'],
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5',
    experience: 16,
    languages: ['English', 'Tamil', 'Hindi'],
    availability: {
      'Tuesday': [
        { start: '10:30', end: '11:00', isBooked: false },
        { start: '14:30', end: '15:00', isBooked: false },
      ],
      'Friday': [
        { start: '09:30', end: '10:00', isBooked: false },
        { start: '15:30', end: '16:00', isBooked: false },
      ]
    },
    costPerAppointment: 3800,
    description: 'Expert in medical negligence and consumer rights cases',
    education: 'LLB from ILS Law College, Diploma in Medical Jurisprudence',
    barCouncilNumber: 'TN/5678/2007'
  }
];