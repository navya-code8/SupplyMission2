
class Walls{

    constructor(x,y,width,height){
        this.color = "red";
        this.body = Bodies.rectangle(x,y,width,height, {restitution:1,isStatic:true});
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color)
        rect(pos.x, pos.y, this.width, this.height);
        

    }
}