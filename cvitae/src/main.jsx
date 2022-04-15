import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux';
import Storage from './redux/store/Storage';
import './constants/styles/global/Variables.scss';
import './constants/styles/global/Base.scss';
import './constants/styles/global/Fonts.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Storage}>
      <Suspense fallback={<div></div>}>
        {/* // add loading here */}
        <Router />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
