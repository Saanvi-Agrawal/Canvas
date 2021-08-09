var mouse_event="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_event="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.storkeStyle=color;
ctx.lineWidth=width;
console.log("lastx="+lastx+" ,lasty="+lasty);
ctx.moveTo(lastx,lasty);
console.log("currentx="+currentx+" ,currenty="+currenty);
ctx.lineTo(currentx,currenty);
ctx.stroke();
}
lastx=currentx;
lasty=currenty;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}