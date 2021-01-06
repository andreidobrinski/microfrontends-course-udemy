import React from 'react';
import ReactDOM from 'react-dom';

// mount function to start the app
const mount = (el) => {
  ReactDOM.render(
    <h1>hello</h1>,
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