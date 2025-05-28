import UsuarioModelo from './UserModel.js';
import LoginView from './LoginView.js';

class Controller {

    constructor(initializeApp, getAnalytics, getAuth) {
        this.view = new LoginView();
        this.model = new UsuarioModelo(initializeApp, getAnalytics, getAuth);
        this.view.loginAction(this.login.bind(this));
        this.view.registerAction(this.register.bind(this));
    }

    async login(e) {
        e.preventDefault();
        const data = this.view.getData();
        this.view.cleanInputs();
        if (data) {
            try {
                await this.model.iniciarSesion(data.username, data.password);
                this.view.showSuccessMessage();
                console.log("Login successful");
                return true;
            } catch (error) {
                alert("Invalid username or password");
                this.view.showSuccessMessage("Invalid username or password");
                console.error(error);
                return false;
            }
        }
    }

    async register(e) {
        e.preventDefault();
        const data = this.view.getData();
        this.view.cleanInputs();
        if (data) {
            console.log("Registering user");
            await this.registerUser(data.username, data.password);
        }
    }

    async registerUser(username, password) {
        try {
            const userCredential = await this.model.registrarUsuario(username, password);
            await this.model.guardarDatosUsuario(userCredential.user.uid, { username: username });
            this.view.showSuccessMessage();
            console.log("User registered successfully");
        } catch (error) {
            alert("Registration failed");
            this.view.showSuccessMessage("Registration failed");
            console.error(error);
        }
    }
}

export default Controller;