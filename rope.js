class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 100
            
        }
        this.sling = Matter.Constraint.create(options) ;
        World.add(world, this.sling);
    }

    display(){
        push();
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        stroke("white")
        strokeWeight(4);
        //fill(255, 255, 255);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }

            
}
        
            
        

            

