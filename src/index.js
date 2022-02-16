import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
// import store from './store';
// import { Provider } from 'react-redux';
import App from './App';
// import App1 from './App1';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
  
//      <Provider store ={store}>  
//       <App1 />
//     </Provider> 
 
//   ,document.getElementById('root')
// );


  



reportWebVitals();
