const logtoNativeClientErrorCodes = Object.freeze({
  auth_session_failed: 'User failed to finish the authentication session.',
  navigation_purpose_not_supported: 'The navigation purpose is not supported.',
});

export type LogtoNativeClientErrorCode = keyof typeof logtoNativeClientErrorCodes;

export class LogtoNativeClientError extends Error {
  name = 'LogtoNativeClientError';
  code: LogtoNativeClientErrorCode;
  data: unknown;

  constructor(code: LogtoNativeClientErrorCode, data?: unknown) {
    super(logtoNativeClientErrorCodes[code]);
    this.code = code;
    this.data = data;
  }
}
