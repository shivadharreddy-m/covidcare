var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database; 
var virus;
var form, player, game;

var doctor, police, covid19, cm;

var track, doctor_img, police_img, covid19_img, cm_img , headimg;

function preload(){
  track = loadImage("12.png");
  doctor_img = loadImage("coronafighters1.png");
  police_img = loadImage("covidpic.jpg");
  covid19_img = loadImage("covidpic2.jpeg");
  cm_img = loadImage("car4.png");
  
  ground = loadImage("ground.png");
  headimg =  loadImage("123.jpeg");
}

function setup(){
  canvas = createCanvas(1500,1200);
  database = firebase.database();
  form = new Form();
  form.display();
  game = new Game();
  game.getState();
  game.start();
  head = createSprite(200,70,1400,1200);
  head . addImage(headimg);
  head.scale = 0.5;
  
}


function draw(){
  drawSprites(); 
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
