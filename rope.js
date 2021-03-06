class Rope{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:200,
            stiffness:0.8, 
        } 
       this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
       display(){
        strokeWeight(3);
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y);
}
    
}