import { WebPlugin } from '@capacitor/core';

import type { ConfigReaderPlugin } from './definitions';

export class ConfigReaderWeb extends WebPlugin implements ConfigReaderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async readStringResource(options: { key: string }): Promise<{ value: string }> {
    console.log('READ_STRING_RESOURCE', options);
    // Web fallback - return empty string or could implement localStorage-based config
    return { value: '' };
  }

  async readInfoPlistValue(options: { key: string }): Promise<{ value: string }> {
    console.log('READ_INFO_PLIST_VALUE', options);
    // Web fallback - return empty string
    return { value: '' };
  }
}
