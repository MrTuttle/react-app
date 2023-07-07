// src/services/api-client.ts

import axios, { CanceledError} from "axios";

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // following need if http request header need API key or something else in the header :
  // headers: {
  //   'api-key': '...'
  // }
})

export {CanceledError};
