# Firebase Setup Guide for Arthavaah

## Prerequisites
1. A Firebase project created at [Firebase Console](https://console.firebase.google.com/)
2. Firebase Authentication enabled
3. Firestore Database enabled

## Environment Variables
Create a `.env.local` file in your project root with the following variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Firebase Console Setup

### 1. Enable Authentication
- Go to Authentication > Sign-in method
- Enable "Email/Password" provider
- Enable "Google" provider
- Add your authorized domains

### 2. Enable Firestore Database
- Go to Firestore Database
- Create database in test mode (for development)
- Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /test/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Get Configuration Values
- Go to Project Settings (gear icon)
- Scroll down to "Your apps"
- Click on the web app or create one
- Copy the configuration values

## Testing the Setup

1. Start your development server: `npm run dev`
2. Go to `/auth/sign-up`
3. Click "Test Firebase Connection" button
4. Check the console for any error messages
5. Try signing up with a test account

## Common Issues

### "Firebase connection failed"
- Check if all environment variables are set
- Verify Firebase project is active
- Check browser console for detailed error messages

### "Permission denied" errors
- Ensure Firestore security rules allow authenticated users to write
- Check if the user is properly authenticated before writing to Firestore

### Google Sign-in not working
- Verify Google provider is enabled in Firebase Console
- Check if the domain is authorized
- Ensure Google OAuth consent screen is configured

## Debugging

The sign-up page now includes a "Test Firebase Connection" button that will:
- Check environment variables
- Test Firestore connection
- Show detailed error messages
- Log everything to the browser console

Check the browser console (F12) for detailed error information when testing.
