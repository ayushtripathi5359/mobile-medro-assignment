# ⚙️ Setup Instructions (From GitHub Repository)

1️⃣ Clone the Repository
git clone https://github.com/<your-username>/Upskillway-App.git
cd Upskillway-App

2️⃣ Install Dependencies

Make sure you’re in the root directory of the project, then run:

npm install


or if you prefer Yarn:

yarn install

3️⃣ Start the Expo Development Server
npx expo start


This will open the Expo Dev Tools in your browser.
Then you can:

Press a → launch Android emulator

Press i → launch iOS simulator

Or scan the QR code with the Expo Go app on your device.

4️⃣ Run on Device or Emulator

Once Metro Bundler starts:

For Android: Expo Go → Scan QR code

For iOS: Use Camera → Scan QR

For Emulator: Choose Run on Android device/emulator from terminal.

That’s it — your project is ready to go. ✅


# 🧠 Design Decisions

1️⃣ TypeScript for Reliability

Using TypeScript enforces type safety, improves IntelliSense support, and prevents runtime errors.
This makes the app scalable and easier to maintain as it grows.

2️⃣ Component-Based Architecture

All reusable parts (header, bottom navigation, cards, etc.) are separated in the /components folder.
This provides:

Reusability

Clean separation of concerns

Faster development and easier debugging

3️⃣ Tailwind CSS (NativeWind) Styling

Utility-first styling directly inside components using Tailwind classes.

No external stylesheets required.

Enables consistent UI and responsive layouts.

Example:

<View className="flex-row justify-around bg-white rounded-full py-3 mb-5 mx-4 shadow-lg">

4️⃣ Expo Managed Workflow

Fast development with live reloading and OTA (Over-The-Air) updates.

Compatible with both iOS and Android builds.

Easy deployment via Expo Go for testing.


# ⚖️ Known Issues / Trade-offs

The final app bundle is slightly larger due to built-in Expo modules.

This is a trade-off for convenience, faster setup, and integrated features like OTA updates.

Some third-party libraries that rely on native code may require ejecting from the Expo managed workflow.

Ejecting allows deeper native access but increases project complexity.

Enabling strict mode can cause additional type warnings during development.

However, it ensures cleaner, safer, and more maintainable code in the long run.

There may be a small delay in style updates during hot reload.

This is a common limitation of NativeWind but doesn’t affect production performance.
