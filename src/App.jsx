import './App.css';

import { BrowserRouter , Route, Routes } from 'react-router-dom';

// import Navbar from './Components/Header/Navbar';
import Home from './Components/Main/Home';
// import Footer from './Components/Footer/Footer';
import Register from './AuthComponents/Register/Register';
import Login from './AuthComponents/Login/Login';
// import Wspp from './Components/Main/Wspp.jsx';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
