
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfy8FM8ijYdfJ4MgfSDrMgFwTZwcazPLE",
  authDomain: "vue-http-demo-25b46.firebaseapp.com",
  databaseURL: "https://vue-http-demo-25b46-default-rtdb.firebaseio.com",
  projectId: "vue-http-demo-25b46",
  storageBucket: "vue-http-demo-25b46.appspot.com",
  messagingSenderId: "360274168525",
  appId: "1:360274168525:web:db7a1f3fbf77cba83ab784"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp