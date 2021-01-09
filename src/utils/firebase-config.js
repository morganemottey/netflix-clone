
import firebase from 'firebase'


export const initFirebase = () => {
    // configuration de firebase à récupérer dans la console firebase...
    var firebaseConfig = {
      apiKey: "AIzaSyB6lLKNPWsZB3ZiuKKLY0617KStfL4DaMY",
      authDomain: "mini-netflix-9473f.firebaseapp.com",
      projectId: "mini-netflix-9473f",
      storageBucket: "mini-netflix-9473f.appspot.com",
      messagingSenderId: "54403836020",
      appId: "1:54403836020:web:2db6e5ba5a98fc6b30c921"
      };
      firebase.initializeApp(firebaseConfig);
}
