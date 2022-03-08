import { ERROR_LOG, INFO_LOG, TRACE_LOG, WARN_LOG } from './constants';

export function error(obj: string | (Error & { lineNumber?: number | string }), ...objs: any[]): void {
  if (ERROR_LOG) {
    let msg = '';
    for (const s of objs) {
      const str: string = typeof s === 'string' ? s : s?.toString?.();
      msg = `${msg} ${str}`;
    }
    console.error(`[ERROR]: ${obj as string} ${msg}`);
    if (typeof obj === 'object') {
      if (obj.message.length > 0) {
        console.log(`\nMessage: ${obj.message}`);
      }
      if (obj.lineNumber) {
        console.log(`Error line number ${obj.lineNumber}`);
      }
      if (obj.stack) {
        console.log('\nStacktrace:');
        console.log('====================');
        console.log(obj.stack);
      }
    }
  }
}

export function trace(obj: string, ...objs: any[]) {
  if (TRACE_LOG) {
    const msg = objs.join(' ');
    console.log('[TRACE]: ' + obj + msg);
  }
}

export function log(obj: any, ...objs: any[]) {
  if (INFO_LOG) {
    const msg = objs.join(' ');
    console.log(`[INFO]: ${obj} ${msg}`);
  }
}

export function warn(obj: any, ...objs: any[]) {
  if (WARN_LOG) {
    const msg = objs.join(' ');
    console.log(`[WARN]: ${obj} ${msg}`);
  }
}
