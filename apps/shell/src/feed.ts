import type { PiletMetadata } from 'piral-core';

export async function piletFeed(): Promise<Array<PiletMetadata>> {
  if (process.env.NODE_ENV === 'development') {
    return [
      {
        name: '@proj/mfe1',
        version: '1.0.0',
        link: 'http://localhost:1235/index.js',
        spec: 'v3',
      },
      {
        name: '@proj/mfe2',
        version: '1.0.0',
        link: 'http://localhost:1236/index.js',
        spec: 'v3',
      },
    ];
  }

  // Production: fetch from your pilet feed service
  // return fetch('https://feed.piral.cloud/api/v1/pilet/your-feed').then(res => res.json());
  return [];
}
