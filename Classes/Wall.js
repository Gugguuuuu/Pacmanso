class Wall{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = createSprite(x, y)
        this.sprite.shapeColor = 'blue'
        this.width = 150;
        this.height = 150;
        this.sprite.immovable = true;

    }
    colisation(colisor){
        this.sprite.displace(colisor)
    }
    // show(){
    //     fill('black')
    //     stroke('blue')
    //     rect(this.x, this.y, this.width, this.height)
    // }
    
}
