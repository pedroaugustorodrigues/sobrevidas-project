import { authorize, refresh, revoke } from 'react-native-app-auth';

const config = {
  issuer: 'http://localhost:8080/realms/sobrevidas/protocol/openid-connect/token',
  clientId: 'backend',
  redirectUrl: 'yourapp://callback', // Defina o URL de redirecionamento da sua aplicação
  scopes: ['openid', 'profile', 'email'], // Adicione os escopos necessários
};

export const login = async () => {
  try {
    const result = await authorize(config);
    console.log('Login successful', result);
    return result;
  } catch (error) {
    console.error('Failed to login', error);
    throw error;
  }
};

export const logout = async (accessToken) => {
  try {
    await revoke(config, { tokenToRevoke: accessToken });
    console.log('Logout successful');
  } catch (error) {
    console.error('Failed to logout', error);
  }
};
