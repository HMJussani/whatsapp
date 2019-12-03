function envia(){

var number = "55" + document.getElementById("number").value;
var message = document.getElementById("message").value;
console.log(number,message);
window.location.href="https://web.whatsapp.com/send?phone="+number+"&text="+message;

}