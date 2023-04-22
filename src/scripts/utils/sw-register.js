import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.bundle.js');
      console.log('Service worker registered');
    } catch (error) {
      console.log('Failed to register service worker', error);
    }
  } else {
    console.log('Service Worker not supported in the browser');
  }
};

export default swRegister;
