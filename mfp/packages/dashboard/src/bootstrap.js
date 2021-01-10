import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to start the app
const mount = (el) => {
  const app = createApp(Dashboard);

  app.mount(el);
};

// if in dev env and in isolation, mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// if running through a container, export mount
export { mount };