import CONFIG from '../globals/config';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    throw new Error('Terjadi kesalahan saat memuat data.');
  }
}

async function sendData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.AUTH_TOKEN,
      },
      body: JSON.stringify(data),
    });
    const responseData = await handleResponse(response);
    return responseData;
  } catch (error) {
    throw new Error('Terjadi kesalahan saat mengirim data.');
  }
}

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Terjadi kesalahan pada server.');
  }
  const responseData = await response.json();
  return responseData;
}

export { fetchData as getData, sendData as postData };
