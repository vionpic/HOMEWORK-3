
function exterInput() {
    var verify = document.getElementsByTagName("input")[0].value;
    if(verify==""){
        document.getElementsByTagName("input")[0].style.backgroundColor = "#FF4136";
        document.querySelector("input + p").innerHTML = "enter email ,please";
        document.querySelector("input+p").style.visibility="visible";
        return false;
    }
    if(!validateEmail(verify)){
        document.querySelector("input + p").innerHTML = " invalid email , please to enter again";
        document.getElementsByTagName("input")[0].style.backgroundColor = "#FF4136";
        document.querySelector("input+p").style.visibility="visible";
        return false;
    }
    else{
        document.querySelector("input + p").innerHTML = "valid email";
        document.getElementsByTagName("input")[0].style.backgroundColor = "#01FF70";
        return true;
    }
}
function messInput(){
    var message=document.getElementsByTagName("input")[1].value;
    if(message==""){
        document.getElementsByTagName("input")[1].style.backgroundColor = "#FF4136";
        document.querySelector("input + p + p + input + p").style.visibility="visible";
        document.querySelector("input + p + p + input + p").innerHTML = "enter email message ,please";
        return false;
    }
    if(message.length>128){
        document.getElementsByTagName("input")[1].style.backgroundColor = "#FF4136";
        document.querySelector("input + p + p + input + p").style.visibility="visible";
        document.querySelector("input + p + p + input + p").innerHTML = "Message too long length,please to enter again";
        return false;
    }
    else{
        document.getElementsByTagName("input")[1].style.backgroundColor = "#01FF70";
        document.querySelector("input + p + p + input + p").innerHTML = "valid Message";
        return true;
    }
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function hide(){
    document.querySelector("input+p").style.visibility="hidden";
    document.getElementsByTagName("input")[0].style.backgroundColor = "white";
}
function hideInput1(){
    document.querySelector("input + p + p + input + p").style.visibility="hidden";
    document.getElementsByTagName("input")[1].style.backgroundColor = "white";
}

  document.getElementsByTagName("button")[2].onclick=function(){
    var inputA=false;
    var inputB=false;
    inputA= exterInput();
    inputB= messInput();
    if(inputA&&inputB){
        document.getElementsByTagName("button")[2].type="submit";
    }else{
        document.getElementsByTagName("button")[2].type="button";
    }
    
  }
  document.getElementsByTagName("input")[0].onclick=function(){
    hide();
}
document.getElementsByTagName("input")[1].onclick=function(){
    hideInput1();
}

function scroll() {
    document.querySelector("div > div + div").scrollTop
}