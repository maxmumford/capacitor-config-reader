# capacitor-config-reader

Read info.plist and strings.xml

## Install

```bash
npm install capacitor-config-reader
npx cap sync
```

## Usage

### Reading from Android strings.xml

```typescript
import { ConfigReader } from 'capacitor-config-reader';

// Read a string resource from strings.xml
const result = await ConfigReader.readStringResource({ key: 'app_name' });
console.log(result.value); // Outputs the value from strings.xml
```

### Reading from iOS Info.plist

```typescript
import { ConfigReader } from 'capacitor-config-reader';

// Read a value from Info.plist
const result = await ConfigReader.readInfoPlistValue({ key: 'CFBundleDisplayName' });
console.log(result.value); // Outputs the value from Info.plist
```

### Example strings.xml (Android)

```xml
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">My App</string>
    <string name="api_base_url">https://api.example.com</string>
    <string name="app_version">1.0.0</string>
    <string name="feature_flag_debug">true</string>
</resources>
```

### Example Info.plist (iOS)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleDisplayName</key>
    <string>My App</string>
    <key>APIBaseURL</key>
    <string>https://api.example.com</string>
    <key>AppVersion</key>
    <string>1.0.0</string>
    <key>FeatureFlagDebug</key>
    <string>true</string>
</dict>
</plist>
```

### Available Keys

#### Android strings.xml

The plugin can read any string resource defined in your `android/app/src/main/res/values/strings.xml` file. Common keys include:

- `app_name` - The application name
- `title_activity_main` - Main activity title
- `package_name` - Package identifier
- `custom_url_scheme` - Custom URL scheme

#### iOS Info.plist

The plugin can read any key defined in your `ios/App/App/Info.plist` file. Common keys include:

- `CFBundleDisplayName` - The application display name
- `CFBundleIdentifier` - The bundle identifier
- `CFBundleShortVersionString` - The app version
- `CFBundleVersion` - The build number

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`readStringResource(...)`](#readstringresource)
- [`readInfoPlistValue(...)`](#readinfoplistvalue)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### readStringResource(...)

```typescript
readStringResource(options: { key: string; }) => Promise<{ value: string; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### readInfoPlistValue(...)

```typescript
readInfoPlistValue(options: { key: string; }) => Promise<{ value: string; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
