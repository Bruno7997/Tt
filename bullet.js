class Bullet{
constructor(x,y,vx,vy){
    this.sprite=createSprite(x,y,windowWidth/32, windowHeight/32)
    this.sprite.shapeColor="yellow"
    this.sprite.setVelocity(vx,vy)
    this.sprite.setCollider("rectangle", 0, 0, windowWidth/32, windowHeight/32)
    //this.sprite.debug=true
    
}

Destroy(i){
    buls[i].sprite.remove();buls.splice(i,1)
}

}