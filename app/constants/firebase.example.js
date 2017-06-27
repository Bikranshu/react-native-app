import firebase from 'firebase';

/**
 * Replace with your Firebase config
 */
const config = {
    apiKey: 'YOUR_API_KEY',
    authDomain: "YOUR_DB_NAME.firebaseapp.com",
    databaseURL: "https://YOUR_DB_NAME.firebaseio.com",
};

firebase.initializeApp(config);

export default firebase;