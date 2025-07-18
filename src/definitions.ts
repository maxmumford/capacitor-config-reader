export interface ConfigReaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
