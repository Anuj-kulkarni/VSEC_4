
function addPassword(){
    let password = document.getElementById("Password")
    let name = document.getElementById("username")

    if(password.length < 8){
        alter("Length of Password Is Less Than 8");
    }
}