import fetch from './request/fetch';

export const Http = {
  fetch: fetch
}
export function NameSpace(name) {
  return function (v) {
    return name + '-' + v;
  }
}
