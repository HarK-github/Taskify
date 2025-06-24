<<<<<<< HEAD
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
=======

import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../htmlImplementation/style/profile.css";
import Profile from './Profile';
import Footer from './Footer';



function App() {
>>>>>>> 1f4c11423ce57db37d99ccdc762dc51a6649a5b1

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};
=======
    <>
    <div>
    <Profile/>
    <Footer />
    </div>
      </>
      
  )
}
>>>>>>> 1f4c11423ce57db37d99ccdc762dc51a6649a5b1

export default App;
