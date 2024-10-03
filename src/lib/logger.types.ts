export type LogErrorArgs = {
  context: string;
  message: string;
  error: Error;
  object?: unknown;
};

export type LogArgs = {
  context: string;
  message: string;
  object?: unknown;
};

export type HttpLogArgs = {
  method?: string;
  path?: string;
  data?: unknown;
};
