
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
   var x= document.documentElement.scrollTop;
   document.querySelector("div > div").style.top=+x+"px";
}
window.onscroll =function(){
    scroll();
}

var clicks=0;
function image(){
    ++clicks;
    if(clicks==5) clicks=0;
    switch (clicks) {
        case 1:
            document.getElementsByTagName("img")[0].src="images/a.jpg";
            break;
        case 2 :
            document.getElementsByTagName("img")[0].src="images/b.png";
            break;
        case 3 :
            document.getElementsByTagName("img")[0].src="images/c.jpg";
            break;
        case 4 :
            document.getElementsByTagName("img")[0].src="images/d.png";
            break;
        case 5 :
            document.getElementsByTagName("img")[0].src="images/e.jpeg";
            break;
        default:
            break;
    }
}
function image1(){
    --clicks;
    if(clicks<0) clicks=5;
    switch (clicks) {
        case 1:
            document.getElementsByTagName("img")[0].src="images/a.jpg";
            break;
        case 2 :
            document.getElementsByTagName("img")[0].src="images/b.png";
            break;
        case 3 :
            document.getElementsByTagName("img")[0].src="images/c.jpg";
            break;
        case 4 :
            document.getElementsByTagName("img")[0].src="images/d.png";
            break;
        case 5 :
            document.getElementsByTagName("img")[0].src="images/e.jpeg";
            break;
        default:
            break;
    }
}
document.getElementsByTagName("button")[1].onclick=function(){
    image();
}
document.getElementsByTagName("button")[0].onclick=function(){
    image1();
}


function avatar() {
    var min=0; 
	var max=5; 
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    switch (random) {
        case 1:
            document.getElementsByTagName("img")[0].src="images/a.jpg";
            break;
        case 2 :
            document.getElementsByTagName("img")[0].src="images/b.png";
            break;
        case 3 :
            document.getElementsByTagName("img")[0].src="images/c.jpg";
            break;
        case 4 :
            document.getElementsByTagName("img")[0].src="images/d.png";
            break;
        case 5 :
            document.getElementsByTagName("img")[0].src="images/e.jpeg";
            break;
        default:
            break;
    }
}
var counter=0;
document.getElementsByTagName("img")[0].onclick=function(){
    ++counter;
    if(counter==1)
    avatar();
}
