import { WebPlugin } from '@capacitor/core';

import type { ConfigReaderPlugin } from './definitions';

export class ConfigReaderWeb extends WebPlugin implements ConfigReaderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
