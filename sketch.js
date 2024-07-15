// declarar as variaveis

//3 funções
let pacman;
let pacmanLeft, pacmanRight, pacmanUp, pacmanDown;
let Ghost1, Ghost2, Ghost3, Ghost4, Ghost5;
let objGhost10,objGhost9, objGhost8, objGhost7, objGhost6, objGhost5, objGhost4, objGhost3, objGhost2, objGhost1;
let wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
let square;
let valor = false

function preload(){
    // Animações do Pacman
    pacmanRight = loadAnimation('./assets/pacman/pacman1.png', './assets/pacman/pacman2.png','./assets/pacman/pacman2.png');
    pacmanLeft = loadAnimation('./assets/pacman/pacman3.png', './assets/pacman/pacman4.png','./assets/pacman/pacman4.png');
    pacmanUp = loadAnimation('./assets/pacman/pacman7.png', './assets/pacman/pacman8.png','./assets/pacman/pacman8.png');
    pacmanDown = loadAnimation('./assets/pacman/pacman5.png', './assets/pacman/pacman6.png','./assets/pacman/pacman6.png');
    // Imagens dos Fantasmas
    Ghost1  = loadImage('./assets/fantasma/fantasmaAmarelo.png')
    Ghost2  = loadImage('./assets/fantasma/fantasmaVerde.png')
    Ghost3  = loadImage('./assets/fantasma/fantasmaAzul.png')
    Ghost4  = loadImage('./assets/fantasma/fantasmaRosa.png')
    Ghost5  = loadImage('./assets/fantasma/fantasmaVermelho.png')

}
function setup(){
    //CRIAÇÃO DO SPRITE DO PACMAN
    createCanvas(windowWidth, windowHeight);
    pacman = createSprite(windowWidth / 2,windowHeight / 1.80, 20, 50);
    pacman.addAnimation('changeLEFT', pacmanLeft)
    pacman.addAnimation('changeRIGHT', pacmanRight)
    pacman.addAnimation('changeUP', pacmanUp)
    pacman.addAnimation('changeDOWN', pacmanDown)
    pacman.scale = 0.5;

    //CRIAÇÃO DOS OBJETOS DAS CLASSE GHOST position X
    objGhost1 = new Ghost(0, 30, Ghost1, 10, 4);
    objGhost2 = new Ghost(0, windowHeight / 5 * 1.5, Ghost2, 10, -4);
    objGhost3 = new Ghost(0, windowHeight / 5 * 3, Ghost3, 10, 9);
    objGhost4 = new Ghost(0, windowHeight / 5 * 4.5, Ghost4, 15, -5);

    //CRIAÇÃO DOS OBJETOS DAS CLASSE GHOST position Y
    objGhost6 = new Ghost(windowWidth / 5, 30, Ghost1, 10, 4);
    objGhost7 = new Ghost(windowWidth / 5 * 2, 30, Ghost2, 10, -4);
    objGhost8 = new Ghost(windowWidth / 5 * 3, 30, Ghost3, 10, 9);
    objGhost9 = new Ghost(windowWidth / 5 * 4, 30, Ghost4, 15, -5);
    objGhost10 = new Ghost(windowWidth / 5 * 4.9, 30, Ghost5, 15, 7);

    //CRIAÇÃO DAS PAREDES
    //LINHA 1
    wall1 = new Wall(windowWidth / 10 * 1, windowHeight / 15 * 2.5)
    
    wall2 = new Wall(windowWidth / 10 * 1, windowHeight / 15 * 6.5)
    wall3 = new Wall(windowWidth / 10 * 1, windowHeight / 15 * 11.5)

    // //LINHA 2
    wall4 = new Wall(windowWidth / 10 * 3, windowHeight / 15 * 2.5)
    wall5 = new Wall(windowWidth / 10 * 3, windowHeight / 15 * 6.5)
    wall6 = new Wall(windowWidth / 10 * 3, windowHeight / 15 * 11.5)

    // //LINHA 3
    wall7 = new Wall(windowWidth / 10 * 5, windowHeight / 15 * 2.5)
    wall8 = new Wall(windowWidth / 10 * 5, windowHeight / 15 * 6.5)
    wall9 = new Wall(windowWidth / 10 * 5, windowHeight / 15 * 11.5)

    // //LINHA 4
    wall10 = new Wall(windowWidth / 10 * 7, windowHeight / 15 * 2.5)
    wall11 = new Wall(windowWidth / 10 * 7, windowHeight / 15 * 6.5)
    wall12 = new Wall(windowWidth / 10 * 7, windowHeight / 15 * 11.5)

    // //LINHA 5
    wall13 = new Wall(windowWidth / 10 * 9, windowHeight / 15 * 2.5)
    wall14 = new Wall(windowWidth / 10 * 9, windowHeight / 15 * 6.5)
    wall15 = new Wall(windowWidth / 10 * 9, windowHeight / 15 * 11.5)   

    

}
function draw(){
    
    PacmansMovimatation()
    checkPacmansMovimatation()
    background(0)
    drawSprites()
    wall1.colisation(pacman);
    wall2.colisation(pacman);
    wall3.colisation(pacman);
    wall4.colisation(pacman);
    wall5.colisation(pacman);
    wall6.colisation(pacman);
    wall7.colisation(pacman);
    wall8.colisation(pacman);
    wall9.colisation(pacman);
    wall10.colisation(pacman);
    wall11.colisation(pacman);
    wall12.colisation(pacman);
    wall13.colisation(pacman);
    wall14.colisation(pacman);
    wall15.colisation(pacman);

    // MOVIMENTO DOS SPRITES NA POSIÇAO X
    objGhost1.colisation(pacman, valor)
    objGhost1.moveX()
    objGhost2.moveX()
    objGhost2.colisation(pacman, valor)
    objGhost3.moveX()
    objGhost3.colisation(pacman, valor)
    objGhost4.moveX()
    objGhost4.colisation(pacman, valor)

//     // MOVIMENTO DOS PERSONAGEMS NO POSIÇÃO Y

    objGhost6.moveY()
    objGhost6.colisation(pacman, valor)
    objGhost7.moveY()
    objGhost7.colisation(pacman, valor)
    objGhost8.moveY()
    objGhost8.colisation(pacman, valor)
    objGhost9.moveY()
    objGhost9.colisation(pacman, valor)
   objGhost10.moveY()
   objGhost10.colisation(pacman, valor)

    }
    //EXIBIÇÃO DAS PAREDES
    // wall1.show()
    // wall2.show();
    // wall3.show();
    // wall4.show();
    // wall5.show();
    // wall6.show();
    // wall7.show();
    // wall8.show();
    // wall9.show();
    // wall10.show();
    // wall11.show();
    // wall12.show();
    // wall13.show();
    // wall14.show();
    // wall15.show();
    // wall16.show();
    // wall17.show();
    // wall18.show();
    // wall19.show();
    // wall20.show();

// if (mouseIsPressed === true) {
//     background(0)
//   } else {
//     background(255,255,255)
//   }

function PacmansMovimatation(){
    if(keyIsDown(LEFT_ARROW)){
        pacman.position.x = pacman.position.x - 5
        pacman.changeAnimation('changeLEFT')
    }
    if(keyIsDown(RIGHT_ARROW)){
        pacman.position.x = pacman.position.x + 5
        pacman.changeAnimation('changeRIGHT')
    }
    if(keyIsDown(UP_ARROW)){
        pacman.position.y = pacman.position.y - 5
        pacman.changeAnimation('changeUP')
    }
    if(keyIsDown(DOWN_ARROW)){
        pacman.position.y = pacman.position.y + 5
        pacman.changeAnimation('changeDOWN')
    }
}
function checkPacmansMovimatation(){
    if (pacman.position.x > windowWidth){
        pacman.position.x = 0
    }
    if (pacman.position.x < 0){
        pacman.position.x = windowWidth
    }
    if (pacman.position.y > windowHeight){
        pacman.position.y = 0
    }
    if (pacman.position.y < 0){
        pacman.position.y = windowHeight
    }
}