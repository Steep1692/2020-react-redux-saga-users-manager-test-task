/**
 * Creates base interface to working with api.
 * @param{string} baseUrl
 * @return {{get: (function(*): Promise<T>)}}
 */
export const createApi = (baseUrl) => {
  return {
    get: (endpoint) => fetch(`${baseUrl}${endpoint}`).then((response) => response.json()),
  }
}