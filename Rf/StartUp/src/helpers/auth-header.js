export function authHeader() {
    // retornar cabeçalho de autorização com token jwt
    let token = localStorage.getItem('@rf/token');
    let user = localStorage.getItem('@rf/user');

    if (user && token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}