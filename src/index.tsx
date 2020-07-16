import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

async function skipWait(registration: ServiceWorkerRegistration) {
  if (registration && registration.waiting) {
    await registration.unregister();
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
  }
}

serviceWorker.register({
  onUpdate: skipWait,
  onSuccess: skipWait,
});
