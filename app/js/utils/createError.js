export default function createError(code = 'unknown error') {
  const error = new Error();
  error.code = code;
  return error;
}
