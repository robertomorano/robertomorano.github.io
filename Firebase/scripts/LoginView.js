class LoginView{
    constructor(){
        this.loginBtn = $("#btnLogin");
        this.registerBtn =  $("#btnRegister");
    }
    cleanInputs(){
        $("#username").val("");
        $("#password").val("");
    }
    getData(){
        const username = $("#username").val();
        const password = $("#password").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
            username === "" ||
            password === "" ||
            password.length < 6 ||
            !emailRegex.test(username)
        ) {
            alert("Please fill in all fields and enter a valid email.");
            return null;
        }
        return {
            username,
            password
        };
    }
    
    showSuccessMessage(texto){
        const success = document.createElement("div");
        success.className = "alert alert-success";
        success.innerHTML = texto;
        document.body.appendChild(success);
    }
    // Functions for the buttons
    loginAction(loginFunction){
        this.loginBtn.on("click",loginFunction);
        
    }
    registerAction(registerFunction){
        this.registerBtn.on("click",registerFunction);
    }

}
export default LoginView;