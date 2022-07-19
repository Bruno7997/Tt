class Monster{
    constructor(x,y,w,h,c){
        this.X=0
        this.Y=0
    this.sprite = createSprite(x,y,w,h)
    this.sprite.shapeColor = c
    this.sprite.setCollider("rectangle", 0, 0, w,h)
    //this.sprite.debug=true
    this.indexX=null
    this.indexY=null
}
speed(px,py){
if(this.sprite.position.x>=px){this.X=-1}else if(this.sprite.position.x<=px){this.X=1}
if(this.sprite.position.y>=py){this.Y=-1}else if(this.sprite.position.y<=py){this.Y=1}
this.sprite.setVelocity(this.X,this.Y)
}
Destroy(i){
    m[i].sprite.remove();m.splice(i,1)
    score++
}
Life(i){
    mL[i]-=1
    if(mL[i]<=0){
        mL.splice(i,1);m[i].Destroy(i)
    }
}
}