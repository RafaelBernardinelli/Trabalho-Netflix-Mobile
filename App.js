import React from 'react';
import { AuthProvider } from './src/context/Auth';
import Route from './src/routes/Route';

export default function App() {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
}
