function loginUser(email, password){

    if(email == "admin@gmail.com" && password == "123456"){
        return "Login Successful";
    }
    else{
        return "Invalid Email or Password";
    }

}

module.exports = loginUser;