class Polygon {
    constructor(x,y,width,radius){
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
    display(color,border){
        var pos = this.body.position;
        var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        
        strokeWeight(4);
        ellipse(0,0,this.radius,this.radius);
        pop();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}
