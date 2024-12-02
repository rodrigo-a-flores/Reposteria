export function isAuthenticated() {
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
}