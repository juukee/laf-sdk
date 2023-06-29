import { CloudSdkInterface } from './cloud.interface';
import request, { AxiosStatic } from 'axios';

const webCloud: CloudSdkInterface = {
  fetch: request,
  database: () => {
    throw new Error('Not implemented');
  },
  invoke: (name: string, param?: any) => {
    return fetch(`/api/${name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    }).then((response) => {
      return response.json();
    });
  },
  getToken: (param: any) => {
    throw new Error('Not implemented');
  },
  parseToken: (token: string) => {
    throw new Error('Not implemented');
  },
  shared: new Map(),
  mongo: {
    connect: () => {
      throw new Error('Not implemented');
    },
    close: () => {
      throw new Error('Not implemented');
    },
    db: () => {
      throw new Error('Not implemented');
    },
    collection: () => {
      throw new Error('Not implemented');
    },
  },
  sockets: new Set(),
  appid: '',
  env: '',
};

export default webCloud;