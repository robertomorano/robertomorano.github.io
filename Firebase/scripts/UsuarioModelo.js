class UsuarioModelo{
    constructor(app) {
        this.auth = app.auth();
        this.db = app.firestore();
    }
    // Set user data
    async registrarUsuario(email, password) {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    // Login user with email and password
    async iniciarSesion(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }


    // Save user data to Firestore
    async guardarDatosUsuario(uid, datos) {
        return this.db.collection('usuarios').doc(uid).set(datos, { merge: true });
    }


}