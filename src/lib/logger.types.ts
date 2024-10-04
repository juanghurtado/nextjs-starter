export type LogErrorArgs = {
  context: string;
  message: string;
  error: Error;
};

export type LogArgs = {
  context: string;
  message: string;
  object?: unknown;
};
