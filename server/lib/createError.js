function createError(code = 1) {
  return {
    status: 1, // 1为错误；0为成功
    code,
  };
}

module.exports = { createError };
