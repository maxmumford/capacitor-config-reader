export interface ConfigReaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  readStringResource(options: { key: string }): Promise<{ value: string }>;
  readInfoPlistValue(options: { key: string }): Promise<{ value: string }>;
}
