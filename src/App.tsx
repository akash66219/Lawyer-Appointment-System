import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LawyerList from './components/LawyerList';
import { Scale, Gavel } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Scale className="h-8 w-8 text-indigo-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Justice & Associates</h1>
                  <p className="text-sm text-gray-500">Expert Legal Consultation</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Gavel className="h-6 w-6 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">Professional Legal Services</span>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LawyerList />
        </main>

        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-gray-500">
              © 2024 Justice & Associates. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;