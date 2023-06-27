import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.render(<Auth0Provider
  domain="dev-7aldffizpyibsq88.us.auth0.com"
  clientId="tbtnh5KWz9nbZWQHV2XXVY9saJaPEas8"
  redirect_uri={window.location.origin}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
   
  <BrowserRouter>
 
   <App />
 
    
  </BrowserRouter>
  </Auth0Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();