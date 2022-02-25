import { initializeApp } from 'firebase/app'
import {getAnalytics} from "firebase/analytics"
import {getMessaging} from 'firebase/messaging'
import {getFirestore} from 'firebase/firestore'
//eslint-disable

const app = initializeApp({
    apiKey: 'AIzaSyAO6IYGQQ1eFj4Y2SXwyHZu6C-OHkvQAXo',
    authDomain: 'cexup-b390f.firebaseapp.com',
    projectId: 'cexup-b390f',
    storageBucket: 'cexup-b390f.appspot.com',
    messagingSenderId: '604489341381',
    appId: '1:604489341381:web:8a186c42637ec4860d53ac',
})

const analytics = getAnalytics(app)

const messaging = getMessaging()

const firestore = getFirestore()
export{
    app,
    analytics,
    messaging,
    firestore
}