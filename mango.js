class Mango{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1


        }
        
        this.body = Bodies.circle(x,y,r/2,options)
        this.x = x;
        this.y = y;
        this.r = r;
        
        this.image=loadImage("sprites/mango.png");
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
   // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
    }


        
    }
