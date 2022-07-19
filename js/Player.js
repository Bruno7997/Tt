class Player {
    constructor() {
      this.name = null;
      this.index=null
      this.positionX = windowWidth/2 ;
      this.positionY = windowHeight/2;
      this.color1=0
      this.color2=0
      this.color3=0
      this.color=null
    }
  
     addPlayer() {
      this.color = [this.color1,this.color2,this.color3];
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
        color: this.color,
      });
    }
   
    //Bp
    getCount() {
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", data => {
        playerCount = data.val();
      });
    }
  
  //Adicionando o valor no playerCount
    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }
    update() {
     var playerIndex = "players/player"+this.index
     database.ref(playerIndex).update({
      name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
        color: this.color,
      });
    }
  static getPlayersInfo(){
  var playerInfoRef=database.ref("players");
  playerInfoRef.on("value", data=>{
    allPlayers=data.val()
  })
  }
  res(){
    this.name = null;
    this.index=null
    this.color1=null
    this.color2=null
    this.color3=null
    for(var i = 0;i<playerCount-1;i++){
      p[i].remove();p.splice(i,1)
    }
  }
  move(){
    this.update()
    p[this.index-1].position.x=this.positionX;p[this.index-1].position.y=this.positionY
  }
  }
  