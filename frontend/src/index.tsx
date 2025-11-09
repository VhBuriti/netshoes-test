import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/organisms/Header';
import Breadcrumb from './components/molecules/Breadcrumb';
import './sass/theme.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Breadcrumb />
  </React.StrictMode>
);

