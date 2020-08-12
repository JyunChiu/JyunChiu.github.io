import baseConfig from './app.base.config';

const config = {
  ...baseConfig,
  version: 'v1.0.0(test)',
  // apiDomain: 'http://127.0.0.100:8000',
  logoutDomain: 'http://127.0.0.1:8000/logout',
  apiDomain: 'http://localhost:3000'
};

export default config;
