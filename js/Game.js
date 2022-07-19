class Game {
  constructor() {}
  //Fazendo referencia ao valor do gameState
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 //Atualizando o gameState
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  
  start() {
    if(gameState==-2){
    player = new Player();
   playerCount = player.getCount();
    form = new Form();
    form.display();
  }
  }

  //Esconder o formulário
  handleElements() {
    form.hide();
  }

  //Criando os jogadores
  play() {
    this.handleElements();

    Player.getPlayersInfo();
//if(allPlayers!==undefined){
  for(var i=0;i!=playerCount;i++){
    console.log(i)
  this.sprite=createSprite(windowWidth/2, windowHeight/2,windowWidth/16, windowHeight/16)
  p.push(this.sprite)
  p[i].shapeColor = (player.color)
  p[i].setCollider("rectangle", 0, 0, windowWidth/16,windowHeight/16)
  }
  //var index = 0;
/*for(var plr in allPlayers){
  var x=allPlayers[plr].positionX
  var y=height - allPlayers[plr].positionY
  p[player.index-1].sprite.positionX = x
  p[player.index-1].sprite.positionY = y
}*/
//}
    }
    jnNpe(){
      if(gameState!=-2){
        clear()
        background(200,200,200);
        fill("red");textSize(25)
text("O jogo ja começou, você não pode mais entrar",windowWidth/2-windowWidth/4,windowHeight/2-windowHeight/4)
    fill("black")
    this.r=1}
    else{this.r=0}
}

  }

