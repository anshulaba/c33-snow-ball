class snow
{
  constructor()
  {
      var options = { 'restitution' : 1,
                      'friction' : 0.6,
                      'density' : 0.6
                    }
      this.snowballs=Bodies.rectangle(200,200,10,10,options);
      this.image = loadImage("snow4.webp");
      this.width=10;
      this.height=10;
      World.add(world,this.snowballs);
  }

  display()
  {
      var pos=this.snowballs.position;
      var angle=this.snowballs.angle;
      push();
      rotate(angle);
      translate(pos.x,pos.y);
      imageMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
  }

}