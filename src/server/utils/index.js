/**
 * @description set cors header for micro(node.js) response
 * @param {Object} res
 * @returns {Object}
 */
export const setAllowCorsHeaders = (res) => {
  return [
    ["Access-Control-Allow-Origin", "*"],
    ["Access-Control-Allow-Methods", "GET,OPTIONS,POST"],
    ["Access-Control-Allow-Headers", "*"],
  ].reduce((__res, header) => {
    const [key, value] = header;
    __res.setHeader(key, value);
    return __res;
  }, res);
};
