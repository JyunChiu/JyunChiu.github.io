import baseConfig from './app.base.config';

const config = {
  ...baseConfig,
  version: 'v1.00(1prod-T)',
  apiDomain: 'http://127.0.0.1:8000',
  logoutDomain: 'http://127.0.0.1:8000/logout'
};

export default config;
