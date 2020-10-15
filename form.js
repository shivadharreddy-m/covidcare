class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.title2 = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title2.hide();
  }

  display(){
    this.title.html("FIGHT COVID");
    this.title.position(displayWidth/2 - 50, 0);

    this.title2.html("CREATED BY SHIVADHAR REDDY M");
    this.title2.position(displayWidth/2 - 150, 40);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello MR/MS " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
