const form=document.getElementById("login")
function verify(){
    form.addEventListener("submit",function(e){
        let x=document.getElementById("email").value
        let y= document.getElementById("pwd").value
        if(x=='prithika@gmail.com' && y=='1234pri')
        {
            document.write("login succesfull")
        }
        else{
            document.write("login failed")
        }
    })
}