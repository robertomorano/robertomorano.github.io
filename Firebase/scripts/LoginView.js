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