import { BACKEND_BASE_PATH, BACKEND_SERVER_URL } from "../../Common/helpers/globals";

export async function loadMyWorkData() {
  const response = await fetch(`${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}/albums`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    console.error('Failed to fetch albums', { status: response.status });
    throw new Response('Failed to fetch albums', { status: response.status });
  }
  const result = { albums: await response.json() };
  console.debug('Albums fetched successfully:', result);
  return result;
}
