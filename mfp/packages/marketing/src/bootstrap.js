import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

// mount function to start the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  history.listen(onNavigate);

  ReactDOM.render(
    <App history={history} />,
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