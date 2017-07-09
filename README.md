
## React Native App

###  [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [React Navigation](https://github.com/react-community/react-navigation) + [Redux](http://redux.js.org) + [Redux Form](https://github.com/erikras/redux-form) + [Firebase](https://www.npmjs.com/package/firebase) 


## Get Started

### 1. Requirements

* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html)
* [Android SDK](https://developer.android.com/studio/index.html)

### 2. Installation

On the command prompt run the following commands:

```sh
$ git clone https://github.com/Bikranshu/react-native-app.git

$ cd react-native-app/

$ npm install
```
Link native dependencies:
```sh
$ react-native link
```

### 3. Firebase Setup

- Go to [https://firebase.google.com](https://firebase.google.com/) and click “Go to Console” in the top right.
- Configure the new project in the Firebase console.
- Find firebase.example.js file in app/constants directory, rename it to firebase.js and edit it with your firebase app configuration.

### 4. Usage
* For Development

    Start react native development server:
    ```sh
    $ react-native start
    ```
    Install android app in emulator / device:
    ```sh
    $ react-native run-android
    ```
* For Production

    Follow [these](https://facebook.github.io/react-native/docs/signed-apk-android.html) steps for generating signed apk for android app.