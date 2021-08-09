class Polygon { 
constructor(x,y,radius) { 
var options = {
isStatic : false,
restitution:0.5,
density:0.2,
} 
this.body = Bodies.circle(x,y,radius,options); 
this.radius = radius;
this.image = loadImage("polygon.png")
World.add(world,this.body)
} 
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle)
strokeWeight(4); 
imageMode(CENTER) 
image(this.image,0,0,this.radius,this.radius)
pop(); 
} 
}

