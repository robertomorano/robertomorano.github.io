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
        this.loginBtn.on("click",loginFunction);
        console.log("Login action set");
    }
    registerAction(registerFunction){
        this.registerBtn.on("click",registerFunction);
        console.log("Register action set");
    }

}
export default LoginView;