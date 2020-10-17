export default {
  /**
   * Promiseを使い指定の時間待機します。
   * @param {Number} ms 待機時間（ミリ秒)
   * @return {Promise} 引数の指定経過時間経過後にresolveされます
   */
  wait (ms) {
    return new Promise((resolve, reject) => {
      window.setTimeout(resolve, ms)
    })
  }
}
