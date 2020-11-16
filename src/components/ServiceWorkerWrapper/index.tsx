import React, { FC, useEffect } from 'react';
import * as serviceWorker from '../../serviceWorker';

const ServiceWorkerWrapper: FC = () => {
  const [showReload, setShowReload] = React.useState(false);
  const [waitingWorker, setWaitingWorker] = React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    window.location.reload(true);
  };

  return showReload ? (
    <div>
      <p>There are new version!</p>
      <button
        type="button"
        onClick={reloadPage}
      >
        Reload
      </button>
    </div>
  ) : <div>No update</div>;
}

export default ServiceWorkerWrapper;
