
## React Native App

###  [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [React Navigation](https://github.com/react-community/react-navigation) + [Redux](http://redux.js.org) + [Redux Form](https://github.com/erikras/redux-form) + [Firebase](https://github.com/firebase/firebase-js-sdk) 


## Get Started

### 1. Requirements

* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html)
* [Android SDK](https://developer.android.com/studio/index.html)

### 2. Firebase

- Find firebase.example.js file in app/constants directory, rename it to firebase.js and edit it with your firebase app configuration.

### 3. Installation

On the command prompt run the following commands.

```sh
$ git clone https://github.com/Bikranshu/react-native-app.git

$ cd react-native-app/

$ npm install
```
Link native dependencies:
```sh
$ react-native link
```
Start react native development server:
```sh
$ react-native start
```
Install android app in emulator / device:
```sh
$ react-native run-android
```