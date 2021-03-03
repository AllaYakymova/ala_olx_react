import axios from 'axios';

export const requestToken = (isAuth, tokenData) => {
  return isAuth && tokenData;
};

async function client({ baseURL, query, isEditable, data, method,  token}) {
  let endpoint = query ? `${baseURL}${query}` : `${baseURL}`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: requestToken(isEditable, token),
  };

  try {
    const request = await axios(
      {
        url: endpoint,
        method,
        data,
        headers,
      },
    );
    const response = await request;
    if (response.status === 200) {
       return response.data;
      }
  } catch (e) {
    throw new Error(e);
  }
}
export default client;
