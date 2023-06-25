import { AxiosRequestHeaders } from 'axios';
import { version } from '../../package.json';
import { Logger } from './logger';

/**
 * 实现延迟功能
 * @param {number} ms 延迟时间（毫秒）
 * @returns {Promise<void>} Promise 对象
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * 实现随机延迟功能
 * @param {number} min 最小延迟时间（毫秒）
 * @param {number} max 最大延迟时间（毫秒）
 * @returns {Promise<void>} Promise 对象
 */
export const randomDelay = (min: number, max: number): Promise<void> => {
  let ms = Math.random() * (max - min) + min;
  ms = Math.ceil(ms);
  Logger.info(`delay for ${ms} ms ...`);
  return delay(ms);
};

/**
 * 将数据转换为字符串
 * @param {any} data 待转换的数据
 * @returns {string} 转换后的字符串
 */
export const toString = (data: any): string => {
  if (typeof data === 'string') return data;
  if (Array.isArray(data)) return data.join('\n');
  return String(data);
};

/**
 * 将数据转换为对象
 * @param {any} data 待转换的数据
 * @returns {{ [key: string]: any }} 转换后的对象
 */
export const toObject = (data: any): { [key: string]: any } => {
  if (Buffer.isBuffer(data)) return JSON.parse(data.toString());
  if (typeof data === 'object') return data;
  if (typeof data === 'string') return JSON.parse(data);
  return {};
};
/**
 * 判断对象是否包含指定属性
 * @param {any} obj 待判断的对象
 * @param {any} key 属性名
 * @returns {boolean} 是否包含指定属性
 */
export const hasOwnProperty = (obj: any, key: any): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

/**
 * 获取当前时间的10位时间戳（以数字形式返回）
 * @returns {number} 当前时间的10位时间戳
 */
export const getCurrentTimestamp = (): number => {
  // 获取当前时间的毫秒数
  const currentTimeInMilliseconds = new Date().getTime();
  // 将毫秒数转换为字符串，并截取前10个字符，得到10位时间戳
  const timestampString = currentTimeInMilliseconds.toString().substr(0, 10);
  // 将时间戳字符串转换为数字，并返回
  return Number(timestampString);
};

/**
 * 添加 User-Agent 到请求头中
 * @param {AxiosRequestHeaders} header 请求头对象
 */
export const addUserAgent = (header: AxiosRequestHeaders) => {
  // 获取 SDK 版本号
  const sdkVersion = version;
  // 拼接 User-Agent 字符串
  header['User-Agent'] = `LafNodeSDK/v${sdkVersion}`;
};

/**
 * 添加 Authorization 到请求头中
 * @param {AxiosRequestHeaders} header 请求头对象
 * @param {string} appID 应用 ID
 * @param {string} token 访问令牌
 */
export const addAuthorization = (header: AxiosRequestHeaders, appID: string, token: string) => {
  // 拼接 Authorization 字符串
  header['Authorization'] = `Bearer ${appID}.${token}`;
};