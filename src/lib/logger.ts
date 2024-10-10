import pino from 'pino';
import { ENV } from './env';
import { LogArgs, LogErrorArgs } from './logger.types';

const isProduction = process.env['NODE_ENV'] === 'production';

const logger = pino({
  level: isProduction ? 'warn' : 'debug',
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: !isProduction
        }
      },
      ...(typeof window === 'undefined' && ENV.BETTERSTACK_SOURCE_TOKEN
        ? [
            {
              target: '@logtail/pino',
              options: {
                sourceToken: ENV.BETTERSTACK_SOURCE_TOKEN
              }
            }
          ]
        : [])
    ]
  }
});

const getExtraInfo = (object: Error | unknown): string => {
  return object
    ? `
More info:
----------
${object instanceof Error ? object : JSON.stringify(object, null, 2)}
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

const error = ({ context, message, error }: LogErrorArgs): void => {
  logger.error(`🚨 [${context}] ${message}${getExtraInfo(error)}`);
};

const fatal = ({ context, message, error }: LogErrorArgs): void => {
  logger.fatal(`💀 [${context}] ${message}${getExtraInfo(error)}`);
};

export const Logger = {
  log,
  info,
  debug,
  warn,
  error,
  fatal
};
