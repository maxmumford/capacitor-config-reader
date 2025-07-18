import { registerPlugin } from '@capacitor/core';

import type { ConfigReaderPlugin } from './definitions';

const ConfigReader = registerPlugin<ConfigReaderPlugin>('ConfigReader', {
  web: () => import('./web').then((m) => new m.ConfigReaderWeb()),
});

export * from './definitions';
export { ConfigReader };
