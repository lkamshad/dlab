// `fetch` is a function given to us by the browser. We will use it here to communicate with our server.

// Because responses to `fetch` are in some non-simple objects, i'll start you with this helper, fetchJSON, which
// simply calls `fetch` and parses the response as json.

// It returns a Promise, which you can call .then() on.
// The .then() function accepts a function as its argument, known as a "callback".
// That callback function accepts 1 argument, the response from the request.
// Example:
/*
    fetchJSON('/path/on/server').then(resp => {
      console.log(resp);
    })
*/

export const fetchJSON = (...args) => {
  return fetch(...args).then(resp => resp.json());
}

export const SERVER_URL = 'http://localhost:9000';
