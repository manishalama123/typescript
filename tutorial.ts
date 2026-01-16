// user doen't exist, wrong credentials, internal

enum LoginError{
    Unauthorized = "unauthroized",
    NoUser = "user doenot exist",
    WrongCredential = "wrongCredential",
    Internal = "internal",
}
const printErrorMsg = (error: LoginError) => {

    if(error ==LoginError.Unauthorized){
        console.log("user not authorized");
    }
    else if(error ==LoginError.NoUser){
        console.log("No user is provided");
    }
    else if(error ==LoginError.WrongCredential){
        console.log("wrong credential");
    }
    else{
        console.log("Internal error");
        
    }
    
}
printErrorMsg(LoginError.WrongCredential);