import Cookie from 'js-cookie';

export function getToken() {
    return Cookie.get('token')
}

export function setToken(token) {
    Cookie.set('token', token)
}

export function getUserInfo() {
    return JSON.parse(Cookie.get('userinfo'))
}

export function setUserInfo(userinfo) {
    Cookie.set('userinfo', JSON.stringify(userinfo))
}