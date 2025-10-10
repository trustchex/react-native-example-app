# Trustchex React Native SDK Example App

This example app demonstrates KYC and identity verification with document scanning, facial recognition, liveness detection, and NFC eID support.

## Features

- 📄 Document scanning (passport, ID cards) with OCR
- 🔍 MRZ processing for travel documents
- 📱 NFC eID card reading
- 👤 Facial recognition and liveness detection
- 🌐 Multi-language support (English, Turkish)
- 🎨 Customizable branding
- 🔗 Deep link support

## Prerequisites

- **React Native**: ≥ 0.79.5
- **iOS**: ≥ 15.6 (Xcode 14.0+)
- **Android**: ≥ API 31 (Kotlin support)
- **Node.js**: 18.0+
- **Camera**: Required
- **NFC**: Optional

## Installation

```sh
yarn install
cd ios && bundle exec pod install && cd ..
```

### Babel Configuration

Add to `babel.config.js`:

```js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets-core/plugin',
  ],
};
```

## Running the App

```sh
# Start Metro
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios
```

## Usage

### Basic Implementation

```tsx
import Trustchex from '@trustchex/react-native-sdk';

<Trustchex
  baseUrl="https://your-server.com"
  sessionId="session-id"
  onCompleted={() => console.log('Completed')}
  onError={(error) => console.error(error)}
/>
```

### With Branding

```tsx
<Trustchex
  baseUrl="https://your-server.com"
  sessionId="session-id"
  branding={{
    logoUrl: 'https://your-logo.png',
    primaryColor: '#1E3A8A',
    secondaryColor: '#F3F4F6',
    tertiaryColor: '#EF4444'
  }}
  locale="en" // 'en' | 'tr'
  onCompleted={() => console.log('Completed')}
  onError={(error) => console.error(error)}
/>
```

### Deep Link Handling

```tsx
import { handleDeepLink } from '@trustchex/react-native-sdk';

const [baseUrl, sessionId] = handleDeepLink({
  url: 'scheme://verification-session/abc123/app-url/api.server.com'
});
```

## Configuration

### iOS Permissions (Info.plist)

```xml
<key>NSCameraUsageDescription</key>
<string>This app uses the camera to scan your ID, passport, and face for secure identity verification.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app uses the microphone to record video with audio for secure identity verification.</string>
<key>NFCReaderUsageDescription</key>
<string>This app uses NFC to read your ID or passport for secure identity verification.</string>
```

### Android Permissions (AndroidManifest.xml)

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.NFC" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.VIBRATE" />
```

## Troubleshooting

- **Metro cache**: Clear cache and restart
- **iOS build**: Reinstall pods
- **Android build**: Clean and rebuild
- **Camera permissions**: Check device settings
- **NFC not working**: Enable NFC in device settings

## Support

- **Email**: [support@trustchex.com](mailto:support@trustchex.com)
- **Documentation**: [docs.trustchex.com](https://docs.trustchex.com)

## License

Commercial license required. Contact [support@trustchex.com](mailto:support@trustchex.com) for licensing information.
