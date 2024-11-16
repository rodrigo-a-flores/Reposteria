import { Link } from 'react-router-dom';
import '../AuthStyle.css';

function Register() {
    return (
        <>
            <form className="form">
                <h2>Registro</h2>
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input type="text" placeholder="Ingresa tu nombre de usuario" />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" placeholder="Ingresa tu email" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingresa tu contraseña" />
                </div>
                <button type="submit" className="btn">
                    Registrarse
                </button>
                <hr />
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
            </form>
        </>
    );
};

export default Register