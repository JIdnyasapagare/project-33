class Block {
constructor(x,y,width,height){ 
var options={
isStatic : false 
} 
this.width = width; 
this.height = height;
this.body = Bodies.rectangle(x,y,this.width,this.height,options);
World.add(world,this.body) 
} 
display(){
var pos = this.body.position;
var angle = this.body.angle;
if (this.body.speed < 5){
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
rect(0,0,this.width,this.height);
pop();
}else {
World.remove(world,this.body); 
} 
} 
}
