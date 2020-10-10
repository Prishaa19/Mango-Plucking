class Tree { constructor(x,y,width,height)
  { var options={ isStatic:false, 
   restitution:0,
    friction:1,
     density:1.2 } 
     this.x=x; this.y=y;
      //this.r=r;
      this.image=loadImage("Sprites/tree.png");
      
      this.body=Bodies.rectangle(x , y, this.width,this.height, options);
         World.add(world, this.body); 
       } 
       display() { 
         var stonepos=this.body.position;
          push()
           translate(stonepos.x, stonepos.y); 
           // rectMode(CENTER) 
           // rotate(this.body.angle)
            fill(255,0,255) ;
            

            imageMode(CENTER); 
            ellipseMode(RADIUS) ;
            image(this.image, 160,250,300,300);
            //image.scale=0,5;
             pop()
            }
            }
