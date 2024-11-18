import { Link } from 'react-router-dom';
import '../AuthStyle.css';
import { AuthLogin } from '../../../src/assets/js/main.js';
function Login() {
    return (
        <div className="body">
            <form   method='post' id='form_login' className="form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" placeholder="Ingresa tu email" id='email' name='email' />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingresa tu contraseña" id='password' name='password' />
                </div>
                <button type="submit" className="btn" onClick={AuthLogin} >
                    Iniciar Sesión
                </button>
                <hr />
                <p>¿No tienes una cuenta? <Link to="/">Registrate</Link></p>
            </form>
        </div>
    );
}

export default Login