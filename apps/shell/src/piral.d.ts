import type { PiletApi as BasePiletApi } from 'piral-core';

declare module '@proj/shell' {
  export interface PiletApi extends BasePiletApi {}
}

declare global {
  interface Window {
    __PIRAL_INSTANCE__: unknown;
  }
}

export {};
