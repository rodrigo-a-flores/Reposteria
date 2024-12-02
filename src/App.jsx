import './App.css';

import { BrowserRouter , Route, Routes } from 'react-router-dom';

// import Navbar from './Components/Header/Navbar';

// import Footer from './Components/Footer/Footer';
import Register from './AuthComponents/Register/Register';
import Login from './AuthComponents/Login/Login';
import ProductListContainer from './Components/Main/Products/ProductListContainer';
// import Wspp from './Components/Main/Wspp.jsx';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<ProductListContainer />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
