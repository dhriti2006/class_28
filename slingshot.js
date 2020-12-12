class slingshot{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= B;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    birdFly(){
        this.slingshot.bodyA = null;
    }

    display(){
        
        if(this.slingshot.bodyA){

        var a = this.slingshot.bodyA.position;
        var b = this.pointB
        strokeWeight(4);
        line(a.x, a.y, b.x, b.y);

        }
    }
    
}