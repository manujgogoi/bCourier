import {SERVER_CHECK} from './urls';

export const isServerAvailable = async () => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'Request timeout');
  });

  const request = fetch(SERVER_CHECK);

  return Promise.race([timeout, request])
    .then(response => console.warn('Server connected'))
    .catch(error => console.warn('Server connection error'));
};
