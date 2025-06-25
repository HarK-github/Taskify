import Register from './Register.tsx'

import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../htmlImplementation/style/profile.css";
import Profile from './Profile';
import Footer from './Footer';
import Login from './components/Login.tsx';

function App() {

  return (
    <>
    <div>
    <Profile/>
    <Footer />
    <Login />
    </div>
      </>
      
  )
}

export default App
