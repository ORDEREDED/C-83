var last_position_mouse_x, last_position_mouse_y;
var mouseEvent="empty";
canvas=document.getElementById("DRAW_ON_ME");
ctx=canvas.getContext("2d");
color="black";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=3.5;
        ctx.moveTo(last_position_mouse_x, last_position_mouse_y);
        ctx.lineTo(current_mouse_x, current_mouse_y);
        ctx.stroke();
    }
last_position_mouse_x=current_mouse_x;
last_position_mouse_y=current_mouse_y;
}
function Clear_Area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);}
    var last_position_touch_x;
    var last_position_touch_y;
    var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;
    if(width<992){
    document.getElementbyId("DRAW_ON_ME").height=new_height;
    document.getElementbyId("DRAW_ON_ME").width=new_width;
 document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    last_position_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_touch_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.moveTo(last_position_touch_x,last_position_touch_y);
    ctx.lineTo(current_touch_x, current_touch_y);
    last_position_touch_x=current_touch_x;
    last_position_touch_y=current_touch_y;
}