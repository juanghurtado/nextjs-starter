import logtail from '@logtail/pino';
import pino from 'pino';
import pretty from 'pino-pretty';
import { ENV } from './env';
import { LogArgs, LogErrorArgs } from './logger.types';

const logger = pino(
  {
    level: ENV.NODE_ENV === 'production' ? 'warn' : 'trace'
  },
  ENV.BETTERSTACK_SOURCE_TOKEN
    ? pino.multistream([
        await logtail({
          sourceToken: ENV.BETTERSTACK_SOURCE_TOKEN,
          options: {
            sendLogsToBetterStack: true
          }
        }),
        {
          stream: pretty()
        }
      ])
    : pretty({
        colorize: true
      })
);

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
