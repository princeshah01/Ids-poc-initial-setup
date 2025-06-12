import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'Consolidated_POC', 
  clientId: 'onnx-client', 
});

export default keycloak;