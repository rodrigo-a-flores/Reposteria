import { Link } from 'react-router-dom';
import '../AuthStyle.css';
function Login() {
    return (
        <form className="form">
            <h2>Login</h2>
            <div className="form-group">
                <label>Correo</label>
                <input type="email" placeholder="Ingresa tu email" />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input type="password" placeholder="Ingresa tu contraseña" />
            </div>
            <button type="submit" className="btn">
                Iniciar Sesión
            </button>
            <hr />
            <p>¿No tienes una cuenta? <Link to="/">Registrate</Link></p>
        </form>
    );
}

export default Login