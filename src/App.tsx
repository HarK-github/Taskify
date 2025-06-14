import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default App;
