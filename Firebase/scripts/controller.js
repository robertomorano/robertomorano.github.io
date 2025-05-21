
class Controller {
  
    constructor(initializeApp, getAnalytics) {
    
    
    const firebaseConfig = {
      apiKey: "AIzaSyDAfnO2RSviFH1Wq-0zG5vpqQAmWcwydXE",
      authDomain: "logintest-993a0.firebaseapp.com",
      projectId: "logintest-993a0",
      storageBucket: "logintest-993a0.firebasestorage.app",
      messagingSenderId: "245451647736",
      appId: "1:245451647736:web:dc087e8fffad53249de90d",
      measurementId: "G-G98DDJJ45W"
    };
  
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.view = new LoginView();
    this.model = new UsuarioModelo(this.app);
    this.view.LoginAction(this.login.bind(this));
    this.view.RegisterAction(this.registerUser.bind(this));
    }
    login() {
        const data = this.view.getData();
        this.view.cleanInputs();
        if (data) {
            if(checkLogin(data.username, data.password)){
              
            }else{
                alert("Invalid username or password");
            }
        }
    }
    register() {
        const data = this.view.getData();
        this.view.cleanInputs();
        if (data) {
            this.registerUser(data.username, data.password);
        }
    }
    checkLogin(username, password) {
        if(this.model.iniciarSesion(username, password)){
          this.view.showSuccessMessage();
          return true;
        }else{
          alert("Invalid username or password");
          return false;
        }
      }
      registerUser(username, password) {
        if(this.model.registrarUsuario(username, password)){
          this.model.guardarDatosUsuario(username, { username: username });
          this.view.showSuccessMessage();
        }else{
          alert("Registration failed");
        }
      }
}
class LoginView{
    constructor(){
        const loginBtn = $("#btnLogin");
        const registerBtn =  $("#btnRegister");
    }
    cleanInputs(){
        $("#username").val("");
        $("#password").val("");
    }
    getData(){
        const username = $("#username").val();
        const password = $("#password").val();
        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return null;
        }
        return {
            username,
            password
        };
    }
    showSuccessMessage(){
        const success = document.createElement("div");
        success.className = "alert alert-success";
        success.innerHTML = "Login successful!";
        document.body.appendChild(success);
    }
    // Functions for the buttons
    loginAction(loginFunction){
        this.loginAction = loginFunction;
    }
    registerAction(registerFunction){
        this.registerAction = registerFunction;
    }

}

class UsuarioModelo{
    constructor(app) {
        //this.auth = app.auth();
        //this.db = app.firestore();
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