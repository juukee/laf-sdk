import { CloudSdkInterface } from './cloud.interface';

const wxCloud: CloudSdkInterface = {
  fetch: wx.request,
  database: () => {
    throw new Error('Not implemented');
  },
  invoke: (name: string, param?: any) => {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name,
        data: param,
        success: (res) => {
          resolve(res.result);
        },
        fail: (err) => {
          reject(err);
        },
      });
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

export default wxCloud;