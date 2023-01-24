//criar variáveis

var coelho, coelhoImg;

var chao, chaoImg;

var chaoInvisive;

var estadoJogo = "play";

//função que carrega imagens
function preload()
{
    coelhoImg = loadImage("img/coelho1.png", "img/coelho2.png", "img/coelho3.png");

    chaoImg = loadImage("img/chao.png");
}


//função que inicializa o arquivo
function setup()
{
    createCanvas(770,300);
    coelho = createSprite(100,174,20,20);
    coelho.addAnimation("coelho", coelhoImg);
    coelho.scale = 0.9
    coelho.x = 60;

    chao = createSprite(100,280,100,10);
    chao.addImage("chao", chaoImg);
    chaoInvisive = createSprite(80,150,100,20);
    chaoInvisive.visible = false;
}

//função que executa o programa até que seja parado
function draw()
{
    //colocar cor de fundo
    background("#652CD0");
    //condição para pular
    //exibir texto de instrução
    //comando que desenha sprites
    if (estadoJogo === "play")
    {
        chao.velocityX = -5;
        if(chao.x<0)
        {
            chao.x = chao.width/2;
        }
        if(keyDown("space"))
        {
            coelho.velocityY = -10;
        }
    }
    
    drawSprites();
}
