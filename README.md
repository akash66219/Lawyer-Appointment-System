# Justice & Associates - Legal Consultation Platform

![Justice & Associates](https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200&h=400)

## Overview

Justice & Associates is a modern web application designed to streamline the process of booking legal consultations with experienced lawyers across India. The platform connects clients with legal professionals specializing in various areas of law, making legal assistance more accessible.

## Features

- **Advanced Search & Filtering**
  - Search lawyers by name or specialty
  - Filter by practice areas
  - Browse comprehensive lawyer profiles

- **Lawyer Profiles**
  - Detailed professional information
  - Educational background
  - Languages spoken
  - Areas of expertise
  - Experience level
  - Bar Council registration details

- **Smart Booking System**
  - Real-time availability checking
  - 30-minute consultation slots
  - Automatic booking confirmation
  - Appointment management

- **User-Friendly Interface**
  - Responsive design
  - Intuitive booking process
  - Clean and professional layout

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Type Safety**: TypeScript
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/justice-associates.git
```

2. Navigate to the project directory:
```bash
cd justice-associates
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
├── store/             # Redux store and slices
├── types/             # TypeScript interfaces
├── data/             # Mock data
└── App.tsx           # Main application component
```

## Key Components

- **LawyerList**: Displays all available lawyers with search and filter capabilities
- **LawyerCard**: Individual lawyer profile card with booking option
- **BookingModal**: Appointment booking interface
- **Redux Store**: Manages application state for lawyers and appointments

## Data Model

### Lawyer
- Personal and professional details
- Specialties and languages
- Availability slots
- Consultation fees

### Appointment
- Client information
- Selected time slot
- Case description
- Booking status

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Legal professional consultants for domain expertise
- [Unsplash](https://unsplash.com) for professional images
- [Lucide](https://lucide.dev) for beautiful icons