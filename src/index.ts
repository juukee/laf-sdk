import axios, { AxiosInstance } from 'axios';
import { Laf } from './laf';
import { LafConfig } from './types';

export * from './laf.interface';
export * from './laf';

export function init(config: LafConfig): Laf {
  const { baseURL, appId, token } = config;
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
      'X-LC-Id': appId,
      'X-LC-Key': `${appId},${token}`,
    },
  });
  const laf = new Laf(axiosInstance);
  return laf;
}