// 设置本地缓存
export const setStorage = (key: string, val: any): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    my.setStorage({
      key,
      data: val,
      success: (res) => {
        console.log("setStorage success", res);
        resolve();
      },
      fail: (err) => {
        console.log("setStorage fail", err);
        reject(err);
      },
    });
  });
//
export const getStorage = (key: string): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    my.getStorage({
      key,
      success: (res) => {
        console.log("setStorage success", res);
        resolve(res.data);
      },
      fail: (err) => {
        console.log("setStorage fail", err);
        reject(err);
      },
    });
  });

export const removeStorage = (key: string): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    my.removeStorage({
      key,
      success: (res) => {
        console.log("removeStorage success", res);
        resolve();
      },
      fail: (err) => {
        console.log("removeStorage fail", err);
        reject(err);
      },
    });
  });

export const clearStorage = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    my.clearStorage({
      success: (res) => {
        console.log("clearStorage success", res);
        resolve();
      },
      fail: (err) => {
        console.log("clearStorage fail", err);
        reject(err);
      },
    });
  });

export const getStorageInfo = (): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    my.getStorageInfo({
      success: (res) => {
        console.log("getStorageInfo success", res);
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);
        resolve(res);
      },
      fail: (err) => {
        console.log("getStorageInfo fail", err);
        reject(err);
      },
    });
  });
