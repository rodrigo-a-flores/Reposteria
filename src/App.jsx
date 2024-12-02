import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './AuthComponents/Register/Register';
import Login from './AuthComponents/Login/Login';
import ProductListContainer from './Components/Main/Products/ProductListContainer';
import ProtectedRoute from './Components/ProtectedRoute';
import ProductDetailsContainer from './Components/Main/Products/ProductDetailsContainer';
import Whatsapp from './Components/Main/Whatsapp';
import Navbar from './Components/Header/Navbar';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Navbar />
                                <ProductListContainer />
                                <Whatsapp />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='/products/:id' element={
                        <ProtectedRoute>
                            <Navbar />
                            <ProductDetailsContainer />
                            <Whatsapp />
                        </ProtectedRoute>

                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
