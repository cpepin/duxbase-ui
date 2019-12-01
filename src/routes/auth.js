import { getApiRoute } from 'utils/env';

export const login = () => getApiRoute('/auth/login');
export const me = () => getApiRoute('/auth/me');
export const token = () => getApiRoute('/auth/token');
