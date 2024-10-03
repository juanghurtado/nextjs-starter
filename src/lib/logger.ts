import pino from 'pino';
import pretty from 'pino-pretty';
import { LogArgs, LogErrorArgs } from './logger.types';

const logger = pino(
  {
    base: undefined,
    level: process.env['NODE_ENV'] === 'production' ? 'warn' : 'trace'
  },
  pretty({
    colorize: true
  })
);

const getExtraInfo = (object: unknown): string => {
  return object
    ? `
More info:
----------
${JSON.stringify(object, null, 2)}
----------`
    : '';
};

const debug = ({ context, message, object = '' }: LogArgs): void => {
  logger.debug(`🔎 [${context}] ${message}${getExtraInfo(object)}`);
};

const info = ({ context, message, object = '' }: LogArgs): void => {
  logger.info(`ℹ️ [${context}] ${message}${getExtraInfo(object)}`);
};

const log = ({ context, message, object = '' }: LogArgs): void => {
  logger.trace(`👨🏻‍💻 [${context}] ${message}${getExtraInfo(object)}`);
};

const warn = ({ context, message, object = '' }: LogArgs): void => {
  logger.warn(`🚧 [${context}] ${message}${getExtraInfo(object)}`);
};

const error = ({
  context,
  message,
  error,
  object = ''
}: LogErrorArgs): void => {
  logger.error(
    `🚨 [${context}] ${message}. Error: ${error.message}`,
    error,
    object
  );
};

const fatal = ({
  context,
  message,
  error,
  object = ''
}: LogErrorArgs): void => {
  logger.fatal(
    `💀 [${context}] ${message}. Error: ${error.message}`,
    error,
    object
  );
};

export const Logger = {
  log,
  info,
  debug,
  warn,
  error,
  fatal
};
