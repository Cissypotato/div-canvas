
var canvas=document.getElementById('canvas')
var drawnable=false
var lastPosition={x:undefined,y:undefined}

canvas.onmousedown=function(a){
    drawnable=true
    var x =a.clientX
    var y =a.clientY
    var circle=document.createElement('div')
    circle.style="width:6px;height:6px;border-radius:50%;background-color:#000;position:absolute;top:"+(y-3)+"px;"+"left:"+(x-3)+"px;"
    canvas.appendChild(circle)
    lastPosition={x:x,y:y}
}

canvas.onmousemove=function(a){
   if(!drawnable){return}
    var x =a.clientX
    var y =a.clientY
    var newPosition={x:x,y:y}
    var circle=document.createElement('div')
    circle.style="width:6px;height:6px;border-radius:50%;background-color:#000;position:absolute;top:"+(y-3)+"px;"+"left:"+(x-3)+"px;"
    canvas.appendChild(circle)
    lastPosition=newPosition
}

canvas.onmouseup=function(x){
    drawnable=false
}

