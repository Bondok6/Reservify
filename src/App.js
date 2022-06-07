import { Routes, Route } from 'react-router-dom';
import DeleteHotel from './pages/admin/deleteHotel/DeleteHotel';
import SplashScreen from './pages/registration/SplashScreen';
import Signup from './pages/registration/signup/Signup';
import AddHotel from './pages/admin/addHotel/AddHotel';
import Sidebar from './components/Sidebar/Sidebar';
import LogIn from './pages/registration/LogIn';
import Reserve from './pages/reserve/Reserve';
import Main from './pages/main/Main';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="page">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/add_hotel" element={<AddHotel />} />
          <Route path="/delete_hotel" element={<DeleteHotel />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
