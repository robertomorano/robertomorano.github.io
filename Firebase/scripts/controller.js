import UsuarioModelo from './UserModel.js';
import LoginView from './LoginView.js';


class Controller {
  
    constructor(initializeApp, getAnalytics, getAuth) {
    
    this.view = new LoginView();
    this.model = new UsuarioModelo(initializeApp, getAnalytics, getAuth);
    this.view.loginAction(this.login.bind(this));
    this.view.registerAction(this.register.bind(this));
    
}

    login() {
        const data = this.view.getData();
        this.view.cleanInputs();
        if (data) {
            if(this.model.iniciarSesion(data.username, data.password)){
          this.view.showSuccessMessage();
          console.log("Login successful");
          return true;
        }else{
          alert("Invalid username or password");
          return false;
        }
        }
    }
    register() {
        const data = this.view.getData();
        this.view.cleanInputs();
        if (data) {
            console.log("Registering user");
            this.registerUser(data.username, data.password);
            console.log("User registered successfully");
        }
    }
    
      registerUser(username, password) {
        if(this.model.registrarUsuario(username, password)){
          this.model.guardarDatosUsuario(username, { username: username });
          this.view.showSuccessMessage();
          console.log("User registered successfully");
        }else{
          alert("Registration failed");
        }
      }
      
}
export default Controller;
