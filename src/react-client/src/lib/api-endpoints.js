const API_BASE_HOST_DEVELOPMENT = 'https://localhost:7239';
const API_BASE_HOST_PRODUCTION = 'https://localhost:7239';

export const API_BASE_URL = process.env.NODE_ENV === 'development' ? API_BASE_HOST_DEVELOPMENT : API_BASE_HOST_PRODUCTION;

const ENDPOINTS = {
  POST_API_AUTH_LOGIN: `${API_BASE_URL}/api/auth/login/`,
  POST_API_ACCOUNT_SIGNUP: `${API_BASE_URL}/api/auth/signup/`,
};

export default ENDPOINTS;
