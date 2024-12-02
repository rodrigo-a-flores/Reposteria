export const AuthRegister = () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const form_register = document.getElementById('form_register');

    form_register.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const form_data = {
            username,
            email,
            password
        }
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_data)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Usuario registrado con éxito');
                window.location.href = '/login';
                return data;
            } else {
                console.error('Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Mensaje de error:', error.message);
        }
    })
}
export const AuthLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const form_login = document.getElementById('form_login');

    form_login.addEventListener('submit', async (e) => {
        e.preventDefault();

        const form_data = {
            email,
            password
        }


        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_data)
            });
            const data = await response.json();

            if (response.ok && data.success) {
                alert('Inicio de sesion exitoso');
                localStorage.setItem('authToken', JSON.stringify(data));
                window.location.href = '/home';
            }else{
                alert('Credenciales incorrectas o no registrado');
            }
        } catch (error) {
            console.error('Mensaje de error:', error);
        }
    })
}

export const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all products:', error);
    }
}

export const getProductsById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching product by ID (${id}):`, error);
    }
}   