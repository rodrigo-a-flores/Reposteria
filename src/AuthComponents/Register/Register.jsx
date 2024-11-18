import { Link } from 'react-router-dom';
import '../AuthStyle.css';
import { AuthRegister } from '../../../src/assets/js/main.js';

function Register() {
    return (
        <div className="body">
            <form method='post' id='form_register' className="form">
                <h2>Registro</h2>
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input type="text" placeholder="Ingresa tu nombre de usuario" id='username' name='username' />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" placeholder="Ingresa tu email" id='email' name='email' />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingresa tu contraseña" id='password' name='password' />
                </div>
                <button type="submit" className="btn" onClick={AuthRegister}>
                    Registrarse
                </button>
                <hr />
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
            </form>
        </div>
    );
};

export default Register