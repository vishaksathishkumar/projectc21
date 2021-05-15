var b1,b2,b3,b4;
var wall;
var breath;
var w1,w2,w3,w4;
var s1,s2,s3,s4;
var d1,d2,d3,d4;

function setup(){
createCanvas(1600,400);
b1=createsprite(50,50,50,25);
b2=createsprite(50,100,50,25);
b3=createsprite(50,150,50,25);
b4=createsprite(50,200,50,25);
wall=createsprite(350,400,25,400);
breath=Math.random(22,83);
s1=Math.random(223,321);
s2=Math.random(223,321);
s3=Math.random(223,321);
s4=Math.random(223,321);
w1=Math.random(30,52);
w2=Math.random(30,52);
w3=Math.random(30,52);
w4=Math.random(30,52);
}
function draw(){

background(255,255,255);
if(wall.x-b1.x<(wall.width+b1.width)/2){
d1=0.5*s1*w1*w1/breath*breath*breath;
if(d1<10){
b1.shapecolour=colour(255,0,0);
}
if(d1>10){
b1.shapecolour=colour(0,255,0);
}


if(wall.x-b2.x<(wall.width+b2.width)/2){
    d2=0.5*s2*w2*w2/breath*breath*breath;
    if(d2<10){
    b2.shapecolour=colour(255,0,0);
    }
    if(d1>10){
    b2.shapecolour=colour(0,255,0);
    }
}

    if(wall.x-b3.x<(wall.width+b3.width)/2){
        d3=0.5*s3*w3*w3/breath*breath*breath;
        if(d3<10){
        b3.shapecolour=colour(255,0,0);
        }
        if(d3>10){
        b3.shapecolour=colour(0,255,0);
        }
    }

        if(wall.x-b4.x<(wall.width+b4.width)/2){
            d4=0.5*s4*w4*w4/breath*breath*breath;
            if(d4<10){
            b4.shapecolour=colour(255,0,0);
            }
            if(d1>10){
            b4.shapecolour=colour(0,255,0);
            }
        }
    }

}