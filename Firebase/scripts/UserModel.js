import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
      apiKey: "AIzaSyDAfnO2RSviFH1Wq-0zG5vpqQAmWcwydXE",
      authDomain: "logintest-993a0.firebaseapp.com",
      projectId: "logintest-993a0",
      storageBucket: "logintest-993a0.firebasestorage.app",
      messagingSenderId: "245451647736",
      appId: "1:245451647736:web:dc087e8fffad53249de90d",
      measurementId: "G-G98DDJJ45W"
    };
    class UsuarioModelo {
        constructor() {
            this.app = initializeApp(firebaseConfig);
            this.analytics = getAnalytics(this.app);
            this.auth = getAuth(this.app);
            
            this.db = getFirestore(this.app);
            console.log(this.auth);
        }

        // Set user data
        async registrarUsuario(email, password) {
            return createUserWithEmailAndPassword(this.auth, email, password);
        }

        // Login user with email and password
        async iniciarSesion(email, password) {
            return signInWithEmailAndPassword(this.auth, email, password);
        }

        // Save user data to Firestore
        async guardarDatosUsuario(uid, datos) {
            return setDoc(doc(this.db, 'usuarios', uid), datos, { merge: true });
        }
    }
export default UsuarioModelo;