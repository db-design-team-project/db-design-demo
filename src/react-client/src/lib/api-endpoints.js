const API_BASE_HOST_DEVELOPMENT = 'https://localhost:7239';
const API_BASE_HOST_PRODUCTION = 'https://localhost:7239';

export const API_BASE_URL = process.env.NODE_ENV === 'development' ? API_BASE_HOST_DEVELOPMENT : API_BASE_HOST_PRODUCTION;

const ENDPOINTS = {
  POST_API_AUTH_LOGIN: `${API_BASE_URL}/api/auth/login/`,
  GET_API_AUTH_LOGOUT: `${API_BASE_URL}/api/auth/logout/`,
  POST_API_AUTH_SIGNUP: `${API_BASE_URL}/api/auth/signup/`,
  GET_API_AUTH_AUTHENTICATE: `${API_BASE_URL}/api/auth/authenticate/`,
};

export default ENDPOINTS;
