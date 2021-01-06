import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start the app
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  );
};

// if in dev env and in isolation, mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// if running through a container, export mount
export { mount };