let playbutton;
let button1;
let button2;
let button3;
let personColor;
// let started = false;

let spike;
let clouds = [];
let spikes = [];
let person;


function setup() {
  createCanvas(800,500);

  spike = new Spiky(240,360);
  spikes.push(spike);

  person = new Character(100,295);
  personColor = "white";

  button1 = createButton('turn red');
  button1.position(50, 40);
  button1.mousePressed(buttonRed);
  angleMode(DEGREES); // Change the mode to DEGREES


  button2 = createButton('turn blue');
  button2.position(50, 60);
  button2.mousePressed(buttonBlue);
  angleMode(DEGREES); // Change the mode to DEGREES

  button3 = createButton('turn green');
  button3.position(50, 80);
  button3.mousePressed(buttonGreen);
  angleMode(DEGREES); // Change the mode to DEGREES
}

function draw() {
  background(51,204,255);


  noStroke();
  fill(0,153,51);
  rect(0,400,800,200);

  noStroke();
  fill(255,204,0);
  rect(0,400,800,5);

  stroke(1);
  fill(0,0,0);
  line(0,400,800,400);

  if (frameCount % 120 == 0) {
      let  c = new Cloud(random(750,800), random(50,300));
      clouds.push(c);
      console.log(clouds); //print the balls array to the console
        }

  for (let i = 0; i < clouds.length; i++) {
  	      clouds[i].drawCloud();
          clouds[i].moveCloud();
  	  }

  if (frameCount % 450 == 0) {
    let s = new Spiky(random(750,800), 360);
    spikes.push(s);
    console.log(spikes);
  }

  for (let i = 0; i < spikes.length; i++) {
        spikes[i].drawSpiky();
        spikes[i].moveSpiky();
  }

  person.drawCharacter();
  person.jumpCharacter();
  person.dieCharacter();


}

function buttonRed(){
  print("red button pushed");
  personColor = "red";
}

function buttonBlue(){
  print("blue button pushed");
  personColor = "blue";
}

function buttonGreen(){
  print("green button pushed");
  personColor = "green";
}


class Cloud {

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawCloud(){
    noStroke();
    fill(255,255,255);
    ellipse(this.x,this.y,20,20);
    ellipse(this.x+10,this.y-10,20,20);
    ellipse(this.x+10,this.y+10,20,20);
    ellipse(this.x+20,this.y,20,20);
    ellipse(this.x+25,this.y+15,20,20);
    ellipse(this.x+30,this.y-10,20,20);
    ellipse(this.x+40,this.y,20,20);
    ellipse(this.x+35,this.y+10,20,20);
  }

  moveCloud(){
    if(keyIsDown(RIGHT_ARROW)){
      this.x = this.x - 3;
    }
    if(keyIsDown(LEFT_ARROW)){
      this.x = this.x + 3;
    }
  }
}

class Spiky {

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawSpiky(){
    noStroke();
    fill(0,0,153);
    rect(this.x,this.y,80,40);
    triangle(this.x,this.y,this.x,this.y+40,this.x-40,this.y+40);
    triangle(this.x+80,this.y,this.x+80,this.y+40,this.x+120,this.y+40);

    stroke(1);
    fill(0,0,0);
    line(this.x,this.y,this.x,this.y+40);
    line(this.x+79,this.y,this.x+79,this.y+40);
    line(this.x+40,this.y,this.x+40,this.y+40);
    line(this.x-10,this.y+10,this.x+88,this.y+10); //line across
    line(this.x-25,this.y+26,this.x+104,this.y+26); //line across

    noStroke();
    fill(128,128,128);
    triangle(this.x,this.y,this.x+5,this.y-10,this.x+10,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+10,this.y,this.x+15,this.y-10,this.x+20,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+20,this.y,this.x+25,this.y-10,this.x+30,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+30,this.y,this.x+35,this.y-10,this.x+40,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+40,this.y,this.x+45,this.y-10,this.x+50,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+50,this.y,this.x+55,this.y-10,this.x+60,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+60,this.y,this.x+65,this.y-10,this.x+70,this.y);

    noStroke();
    fill(128,128,128);
    triangle(this.x+70,this.y,this.x+75,this.y-10,this.x+80,this.y);
    }

  moveSpiky(){
       if(keyIsDown(RIGHT_ARROW)){
         this.x = this.x - 2;
       }
       if(keyIsDown(LEFT_ARROW)){
         this.x = this.x + 2;
       }
     }
}

class Character {

  constructor(x,y){
        this.x = x;
        this.y = y;
      //  this.color = color;
  }

  drawCharacter() { //original this.x = 30, this.y = 20

    fill (personColor);
    strokeWeight(1);
    stroke("black");
    beginShape();
    rect(this.x, this.y, 55, 55);
    rect(this.x, this.y + 55, 20, 50);
    rect(this.x + 35, this.y + 55, 20, 50);
    ellipse(this.x + 15, this.y + 15, 15, 15);
    ellipse(this.x + 40, this.y + 15, 15, 15);
    arc(this.x + 28, this.y + 30, 30, 30, 0, 180);
    endShape();
  }

  jumpCharacter() {
    if(keyIsDown(UP_ARROW)){
      this.y = this.y - 2;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y = this.y + 2;
    }
  }

  dieCharacter(){

    for (let i = 0; i < spikes.length; i++) {
      if(this.x >= spikes[i].x  && this.x <= spikes[i].x + 80 && this.y <= spikes[i].y && this.y >= spikes[i].y - 10)  {
          stroke("gray");
          textSize(20);
          text("game over", width/2, height/2);
          console.log(spikes[i].x);


        }
      }
}

}


function cloud(rx,ry){
  noStroke();
  fill(255,255,255);
  ellipse(rx,ry,20,20);
  ellipse(rx+10,ry-10,20,20);
  ellipse(rx+10,ry+10,20,20);
  ellipse(rx+20,ry,20,20);
  ellipse(rx+25,ry+15,20,20);
  ellipse(rx+30,ry-10,20,20);
  ellipse(rx+40,ry,20,20);
  ellipse(rx+35,ry+10,20,20);
}
