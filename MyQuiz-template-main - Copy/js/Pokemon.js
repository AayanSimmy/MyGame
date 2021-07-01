class Pokemon {

  constructor() {
    this.title = createElement('h1')
    this.question= createElement('h2')
    ;
    
    this.button1= createButton('gengar');
    this.button2 = createButton('charizard');
    this.button3 = createButton('venasuar');
    this.button4 = createButton('greninja');

    this.shadowBall=createButton('shadowBall')
    this.shadowClaw=createButton('shadowClaw')

    this.flameThrower=createButton('flameThrower')
    this.hurricane=createButton('hurricane')
  }
  hide(){
    this.title.hide();
    this.question.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
  }

  display(){
    this.title.html("Pokemon Battle");
    this.title.position(350, 0);

    this.question.html("Choose your pokemon!" );
    this.question.position(425,40);
    this.button1.position(70,120 );
    this.button2.position(70, 150);
    this.button3.position(70,180);
    this.button4.position(70, 210);
    
    this.shadowBall.hide()
    this.shadowClaw.hide()

    this.flameThrower.hide()
    this.hurricane.hide()
    
    this.button1.mousePressed(()=>{
      this.title.hide();
      
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.shadowBall.position(100,350)
    this.shadowClaw.position(160,350)
      this.shadowBall.display()
      this.shadowClaw.display()
    });

    this.button2.mousePressed(()=>{
      this.title.hide();
      
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.flameThrower.position(100,350)
    this.hurricane.position(160,350)
      this.flameThrower.unhide()
      this.hurricane.unhide()
    });
  }
}
