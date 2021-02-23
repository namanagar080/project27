class Bob{
    constructor(x,y,radius){
        var boxOptions={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.0          
        }
        
        this.body=Bodies.circle(x,y,radius/2,boxOptions);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;
    }

    display(){
        var angle=this.body.angle;
        push();
        fill("red");
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        ellipseMode(CENTER);
      ellipse(0,0,this.radius,this.radius);
       pop();
    }
}   