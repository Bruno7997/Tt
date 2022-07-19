class Form {
  constructor() {
    //Objetos
    this.inputN = createInput("").attribute("placeholder", "Digite seu nome");
    this.inputN.style('font-size', '50px')
    this.inputC1 = createInput("").attribute("placeholder", "Digite sua cor (RGB), 1° valor");
    this.inputC1.style('font-size', '35px')
    this.inputC2 = createInput("").attribute("placeholder", "Digite sua cor (RGB), 2° valor");
    this.inputC2.style('font-size', '35px')
    this.inputC3 = createInput("").attribute("placeholder", "Digite sua cor (RGB), 3° valor");
    this.inputC3.style('font-size', '35px')
    this.playButton = createButton("Play");
    this.playButton.style('font-size', '50px')
    this.greeting = createElement("h2");
    this.greeting.style('font-size', '50px')

    this.sprite=createSprite(width/2 , height/2-height/3,width/8 , height/16)
  }

  setElementsPosition() {
    //Posição
    this.inputN.size(width/4 , height/16)
    this.inputN.position(width/2 - width/4/2, height/2 - height/16*4);
    this.inputC1.size(width/4 , height/16)
    this.inputC1.position(width/2 - width/4/2*3, height/2 - height/16*2.5);
    this.inputC2.size(width/4 , height/16)
    this.inputC2.position(width/2 - width/4/2, height/2 - height/16*2.5);
    this.inputC3.size(width/4 , height/16)
    this.inputC3.position(width/2 + width/4/2, height/2 - height/16*2.5);
    this.playButton.size(width/4 , height/16)
    this.playButton.position(width/2 - width/4/2, height/2 - height/16/2);
    this.greeting.size(width , height/16)
    this.greeting.position(width/2 - width/2, height/2 - height/4/2);
  }

  setElementsStyle() {
    //Estilo
    this.inputN.class("customInput");
    this.inputC1.class("customInput");
    this.inputC2.class("customInput");
    this.inputC3.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    //Esconder os objetos
    this.greeting.hide();
    this.playButton.hide();
    this.inputN.hide();
    this.inputC1.hide();
    this.inputC2.hide();
    this.inputC3.hide();
  }

  handleMousePressed() {
    //Apertar o botão
    this.playButton.mousePressed(() => {
      this.inputN.hide();
      this.inputC1.hide();
      this.inputC2.hide();
      this.inputC3.hide();
      this.playButton.hide();
      //${playerCount.value()} 
      var message = `Olá ${this.inputN.value()}
      </br>Espere outros jogadores entrarem e aperte Enter para começar, jogadores:  </br>Ou aperte Enter para começar sozinho`;
      this.greeting.html(message);
      playerCount += 1
      player.name = this.inputN.value();
      player.color1 = (this.inputC1.value())
      player.color2 = (this.inputC2.value())
      player.color3 = (this.inputC3.value())
      player.index = playerCount;
      m.indexX=player.index-1;m.indexY=player.index-1
      player.addPlayer();
      player.updateCount(playerCount); // BP
    });
  }

  display() {
    //Chamando as funções(todas)
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.showColor()
  }
  res(){
    //Remover os objetos
    this.inputN.remove()
    this.inputC1.remove()
    this.inputC2.remove()
    this.inputC3.remove()
    this.greeting.remove()
    this.playButton.remove()
    this.sprite.remove()
  }
  showColor(){
    //Cor do personagem
this.color=[this.inputC1.value(),this.inputC2.value(),this.inputC3.value()]
this.sprite.shapeColor=(this.color)
}
}
