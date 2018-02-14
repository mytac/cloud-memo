const errors = {
  CONNECT_DB_FAILED: 'CONNECT_DB_FAILED', // 连接数据库失败
  HANDLE_DB_FAILED: 'HANDLE_DB_FAILED', // 与数据库操作时发生错误
  INVALID_PARAMETERS: 'INVALID_PARAMETERS', // 参数错误
  SYSTEM_ERROR: 'SYSTEM_ERROR', // 系统错误，可能是语法，查看日志

};

module.exports = errors;
