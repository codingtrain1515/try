var pc;
var walls;
var wallImg;
var walkImg;
var stand;
var diamond = 0;
var diamondImg;
var diamondGroup;

var ob1;
var ob2;
var ob3;
var ob4;
var ob5;
var ob6;
var ob7;
var ob8;
var ob9;
var ob10;
var ob11;
var ob12;
var ob13;
var ob14;
var ob15;
var ob16;
var ob17;
var ob18;
var ob19;
var ob20;
var ob21;
var ob22;
var ob23;
var ob24;
var ob25;
var ob26;
var ob27;
var ob28;
var ob29;
var ob30;
var ob31;
var ob32;
var ob33;
var ob34;
var ob35;
var ob36;
var ob37;
var ob38;
var ob39;
var ob40;
var ob41;
var ob42;
var ob43;
var ob44;
var ob45;
var ob46;
var ob47;

var well1;
var wellImg;



var obstacleGroup;
var dGroup;
var rewardGroup;
var rewardImg1;
var rewardImg2;

var gameState = "PLAY";
var speedUpReward = 0;
var pcvelocityX = 4;
var pcvelocityY = 4;
let timer = 50;
var movingWallGroup;
var ground;


//assets
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;


var building1;
var building2;
var building3;


var maintileImg1;
var maintileImg2;
var maintileImg3;
var maintileImg4;
var maintileImg5;
var maintileImg6;
var maintileImg7;
var maintileImg8;
var maintileImg9;


var EdgesImg1;
var EdgesImg2;
var EdgesImg3;
var EdgesImg4;


var TilesImg1;
var TilesImg2;


var cactus1;
var cactus2;
var cactusImg;
var cactusGroup;

var lifeImage;

//soundEffects

var grassSound;
var stepsSound1;
var stepsSound2;
var stepsSound3;
var stepsSound4;






function preload() {
    walkImg = loadAnimation('images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png');
    stand = loadImage('images/1i.png')



    // ASSETS

    //blocks
    block1 = loadImage('assets/Blocks/b1.png');
    block2 = loadImage('assets/Blocks/b2.png');
    block3 = loadImage('assets/Blocks/b3.png');
    block4 = loadImage('assets/Blocks/b4.png');
    block5 = loadImage('assets/Blocks/b5.png');
    block6 = loadImage('assets/Blocks/b6.png');

    //buildings

    building1 = loadImage('assets/Buildings/Building1.png');
    building2 = loadImage('assets/Buildings/Building2.png');
    building3 = loadImage('assets/Buildings/Building3.png');

    //Main Tiles

    maintileImg1 = loadImage('assets/mainTiles/tiles1.png');
    maintileImg2 = loadImage('assets/mainTiles/tiles2.png');
    maintileImg3 = loadImage('assets/mainTiles/tiles3.png');
    maintileImg4 = loadImage('assets/mainTiles/tiles4.png');
    maintileImg5 = loadImage('assets/mainTiles/tiles5.png');
    maintileImg6 = loadImage('assets/mainTiles/tiles6.png');
    maintileImg7 = loadImage('assets/mainTiles/tiles7.png');
    maintileImg8 = loadImage('assets/mainTiles/tiles8.png');
    maintileImg9 = loadImage('assets/mainTiles/tiles9.png');

    // Edges
    EdgesImg1 = loadImage('assets/Hedges/Edge1.png');
    EdgesImg2 = loadImage('assets/Hedges/Edge2.png');
    EdgesImg3 = loadImage('assets/Hedges/Edge3.png');
    EdgesImg4 = loadImage('assets/Hedges/Edge4.png');

    // Tiles
    TilesImg1 = loadImage('assets/Tiles/grass.png');
    TilesImg2 = loadImage('g.png');

    //Well

    wellImg = loadImage('assets/Props/well.png');

    //rewardImg

    rewardImg1 = loadImage('assets/Props/Dot_A.png')
    rewardImg2 = loadImage('assets/Props/Dot_B.png')

    //cactus Img

    cactusImg = loadImage('assets/Props/Cactus_03.png');

    //SOUND EFFECTS

    grassSound = loadSound('sound/grass.mp3');
    stepsSound1 = loadSound('sound/steps.mp3');
    stepsSound2 = loadSound('sound/steps.mp3');
    stepsSound3 = loadSound('sound/steps.mp3');
    stepsSound4 = loadSound('sound/steps.mp3');

    // gameAssets 
    lifeImage = loadImage('gameAssets/life.png');
    diamondImg = loadImage('D.png')



}


function setup() {

    createCanvas(windowWidth, windowHeight);
    movingWallGroup = new Group();
    rewardGroup = new Group();
    cactusGroup = new Group();
    diamondGroup = new Group();


    // Loading Assets

    ground = createSprite(width / 2, height / 2, width, height);
    ground.addImage(TilesImg2);
    ground.scale = 10;


    // wellImg

    well1 = createSprite(180, 620, 20, 20);
    well1.addImage(wellImg);
    well1.setCollider("circle", 0, 0, 65);
    well1.debug = false;

    //cactus

    cactus1 = createSprite(850, 521, 20, 20);
    cactus1.addImage(cactusImg);
    cactus1.scale = 0.5;
    cactus1.setCollider("circle", 0, 0, 45);
    cactus1.debug = false;
    cactusGroup.add(cactus1);


    cactus2 = createSprite(365, 566, 20, 20);
    cactus2.addImage(cactusImg);
    cactus2.scale = 0.5;
    cactus2.setCollider("circle", 0, 0, 45);
    cactus2.debug = false;
    cactusGroup.add(cactus2);

    // Player
    pc = createSprite(width / 2, height / 1.15, 10, 10);
    pc.addImage(stand)
    pc.addAnimation("walk", walkImg)
    pc.scale = 0.3

    //Groups
    walls = new Group();
    obstacleGroup = new Group();
    dGroup = new Group();

    // Obstacles

    ob1 = createSprite(1396, 464, 30, 80);
    ob1.shapeColor = 'blue';
    ob1.addImage(block4)
    ob1.scale = 0.3;

    ob2 = createSprite(1396, 385, 30, 80);
    ob2.shapeColor = 'yellow';
    ob2.addImage(block3);
    ob2.scale = 0.3;

    ob3 = createSprite(1396, 310, 30, 80);
    ob3.shapeColor = 'purple';
    ob3.addImage(block4);
    ob3.scale = 0.3;

    ob4 = createSprite(1396, 230, 30, 80);
    ob4.shapeColor = 'orange';
    ob4.addImage(block3);
    ob4.scale = 0.3;

    ob5 = createSprite(1396, 545, 30, 80);
    ob5.shapeColor = 'grey';
    ob5.addImage(block3);
    ob5.scale = 0.3;

    ob6 = createSprite(1396, 160, 30, 80);
    ob6.shapeColor = 'black';
    ob6.addImage(block4);
    ob6.scale = 0.3;

    //side


    ob7 = createSprite(1313, 156, 80, 30);
    ob7.shapeColor = 'yellow';
    ob7.addImage(block4);
    ob7.scale = 0.3;


    ob8 = createSprite(1250, 156, 80, 30);
    ob8.shapeColor = 'yellow';
    ob8.scale = 0.3;
    ob8.addImage(block4);

    ob9 = createSprite(1187, 156, 80, 30);
    ob9.shapeColor = 'yellow';
    ob9.scale = 0.3;
    ob9.addImage(block4);

    ob10 = createSprite(1124, 156, 80, 30);
    ob10.shapeColor = 'yellow';
    ob10.scale = 0.3;
    ob10.addImage(block4);

    ob11 = createSprite(1061, 156, 80, 30);
    ob11.shapeColor = 'yellow';
    ob11.scale = 0.3;
    ob11.addImage(block4);

    ob12 = createSprite(998, 156, 80, 30);
    ob12.shapeColor = 'yellow';
    ob12.scale = 0.3;
    ob12.addImage(block4);

    ob13 = createSprite(935, 156, 80, 30);
    ob13.shapeColor = 'yellow';
    ob13.scale = 0.3;
    ob13.addImage(block4);
    //vertical offset

    ob14 = createSprite(937, 210, 30, 80);
    ob14.shapeColor = 'brown';
    ob14.scale = 0.3;
    ob14.addImage(block4);

    ob15 = createSprite(937, 264, 30, 80);
    ob15.shapeColor = 'yellow';
    ob15.scale = 0.3;
    ob15.addImage(block3);

    ob16 = createSprite(937, 318, 30, 80);
    ob16.shapeColor = 'yellow';
    ob16.scale = 0.3;
    ob16.addImage(block4);

    ob17 = createSprite(937, 372, 30, 80);
    ob17.shapeColor = 'yellow';
    ob17.scale = 0.3;
    ob17.addImage(block3);

    ob18 = createSprite(937, 426, 30, 80);
    ob18.shapeColor = 'yellow';
    ob18.scale = 0.3;
    ob18.addImage(block4);

    // ob19 = createSprite(937, 580, 30, 80);
    // ob19.shapeColor = 'yellow';
    // ob19.scale = 0.3;

    // left side

    ob20 = createSprite(971, 598, 80, 30);
    ob20.shapeColor = 'yellow';
    ob20.scale = 0.3;
    ob20.addImage(block4);

    ob21 = createSprite(1025, 598, 80, 30);
    ob21.shapeColor = 'black';
    ob21.scale = 0.3;
    ob21.addImage(block4);


    ob22 = createSprite(1133, 598, 80, 30);
    ob22.shapeColor = 'yellow';
    ob22.scale = 0.3;
    ob22.addImage(block4);

    ob23 = createSprite(1187, 598, 80, 30);
    ob23.shapeColor = 'yellow';
    ob23.scale = 0.3;
    ob23.addImage(block4);

    ob24 = createSprite(1241, 598, 80, 30);
    ob24.shapeColor = 'yellow';
    ob24.scale = 0.3;
    ob24.addImage(block4);

    ob25 = createSprite(1295, 598, 80, 30);
    ob25.shapeColor = 'yellow';
    ob25.scale = 0.3;
    ob25.addImage(block4);


    // left walls


    ob26 = createSprite(30, 161, 80, 30);
    ob26.shapeColor = 'yellow';
    ob26.scale = 0.3;
    ob26.addImage(block4);

    ob27 = createSprite(85, 161, 80, 30);
    ob27.shapeColor = 'yellow';
    ob27.scale = 0.3;
    ob27.addImage(block4);

    ob28 = createSprite(140, 161, 80, 30);
    ob28.shapeColor = 'yellow';
    ob28.scale = 0.3;
    ob28.addImage(block4);

    ob29 = createSprite(195, 161, 80, 30);
    ob29.shapeColor = 'yellow';
    ob29.scale = 0.3;
    ob29.addImage(block4);

    ob30 = createSprite(250, 161, 80, 30);
    ob30.shapeColor = 'yellow';
    ob30.scale = 0.3;
    ob30.addImage(block4);


    ob31 = createSprite(305, 161, 80, 30);
    ob31.shapeColor = 'yellow';
    ob31.scale = 0.3;
    ob31.addImage(block4);

    ob32 = createSprite(360, 161, 80, 30);
    ob32.shapeColor = 'yellow';
    ob32.scale = 0.3;
    ob32.addImage(block4);

    ob33 = createSprite(470, 161, 80, 30);
    ob33.shapeColor = 'yellow';
    ob33.scale = 0.3;
    ob33.addImage(block4);

    //DOWN 


    ob34 = createSprite(473, 219, 80, 30);
    ob34.shapeColor = 'yellow';
    ob34.scale = 0.3;
    ob34.addImage(block3);

    ob35 = createSprite(473, 280, 80, 30);
    ob35.shapeColor = 'yellow';
    ob35.scale = 0.3;
    ob35.addImage(block4);

    ob36 = createSprite(473, 341, 80, 30);
    ob36.shapeColor = 'yellow';
    ob36.scale = 0.3;
    ob36.addImage(block3);

    ob37 = createSprite(473, 402, 80, 30);
    ob37.shapeColor = 'yellow';
    ob37.scale = 0.3;
    ob37.addImage(block4);

    ob38 = createSprite(473, 463, 80, 30);
    ob38.shapeColor = 'yellow';
    ob38.scale = 0.3;
    ob38.addImage(block3);

    ob39 = createSprite(473, 1124, 80, 30);
    ob39.shapeColor = 'yellow';
    ob39.scale = 0.3;
    ob39.addImage(block4);

    ob40 = createSprite(473, 1185, 80, 30);
    ob40.shapeColor = 'yellow';
    ob40.scale = 0.3;
    ob40.addImage(block3);

    //downright





    ob41 = createSprite(30, 464, 80, 30);
    ob41.shapeColor = 'yellow';
    ob41.scale = 0.3;
    ob41.addImage(block4);

    ob42 = createSprite(75, 464, 80, 30);
    ob42.shapeColor = 'yellow';
    ob42.scale = 0.3;
    ob42.addImage(block4);

    ob43 = createSprite(120, 464, 80, 30);
    ob43.shapeColor = 'yellow';
    ob43.scale = 0.3;
    ob43.addImage(block4);

    ob44 = createSprite(165, 464, 80, 30);
    ob44.shapeColor = 'yellow';
    ob44.scale = 0.3;
    ob44.addImage(block4);

    //top to bottom


    ob45 = createSprite(25, 230, 80, 30);
    ob45.shapeColor = 'yellow';
    ob45.scale = 0.3;
    ob45.addImage(block3);

    ob46 = createSprite(25, 310, 80, 30);
    ob46.shapeColor = 'yellow';
    ob46.scale = 0.3;
    ob46.addImage(block3);

    ob47 = createSprite(25, 390, 80, 30);
    ob47.shapeColor = 'yellow';
    ob47.scale = 0.3;
    ob47.addImage(block3);





    obstacleGroup.add(ob1);
    obstacleGroup.add(ob2);
    obstacleGroup.add(ob3);
    obstacleGroup.add(ob4);
    obstacleGroup.add(ob5);
    obstacleGroup.add(ob6);
    obstacleGroup.add(ob7);
    obstacleGroup.add(ob8);
    obstacleGroup.add(ob9);
    obstacleGroup.add(ob10);
    obstacleGroup.add(ob11);
    obstacleGroup.add(ob12);
    obstacleGroup.add(ob13);
    obstacleGroup.add(ob14);
    obstacleGroup.add(ob15);
    obstacleGroup.add(ob16);
    obstacleGroup.add(ob17);
    obstacleGroup.add(ob18);
    // obstacleGroup.add(ob19);
    obstacleGroup.add(ob20);
    obstacleGroup.add(ob21);
    obstacleGroup.add(ob22);
    obstacleGroup.add(ob23);
    obstacleGroup.add(ob24);
    obstacleGroup.add(ob25);
    obstacleGroup.add(ob26);
    obstacleGroup.add(ob27);
    obstacleGroup.add(ob28);
    obstacleGroup.add(ob29);
    obstacleGroup.add(ob30);
    obstacleGroup.add(ob31);
    obstacleGroup.add(ob32);
    obstacleGroup.add(ob33);
    obstacleGroup.add(ob34);
    obstacleGroup.add(ob35);
    obstacleGroup.add(ob36);
    obstacleGroup.add(ob37);
    obstacleGroup.add(ob38);
    obstacleGroup.add(ob39);
    obstacleGroup.add(ob40);
    obstacleGroup.add(ob41);
    obstacleGroup.add(ob42);
    obstacleGroup.add(ob43);
    obstacleGroup.add(ob44);
    obstacleGroup.add(ob45);
    obstacleGroup.add(ob46);
    obstacleGroup.add(ob47);



    createDangerousMovement();

    createReward();
}

function draw() {
    background("white")

    if (gameState === "PLAY") {
        //speedUpReward



        pc.overlap(rewardGroup, function(collector, collected) {
            speedUpReward += 2;
            //collected is the sprite in the group collectibles that triggered
            //the event
            collected.remove();
        });

        if (pc.isTouching(obstacleGroup)) {
            grassSound.play()
        }




        //  reducing Life
        if (dGroup.isTouching(pc)) {
            pc.x = pc.x - 20;
            pc.y = pc.y - 20;
        }
        if (pc.isTouching(cactusGroup)) {
            gameState = "END"
        }
        if (pc.isTouching(diamondGroup)) {
            text('diamond collected:' + diamond, width / 2, height / 2)
        }


        // if(life == 0) {

        // }
        // createMovingWall()
        createWalls();
        pc.collide(obstacleGroup);
        dGroup.bounceOff(walls);
        dGroup.bounceOff(obstacleGroup);


    } else if (gameState === "END") {
        //game End
        gameOver();
        dGroup.velocityX = 0;
        dGroup.velocityY = 0;
        pc.velocityX = 0;
        pc.velocityY = 0;


        Timer = 0;

    }

    drawSprites();
    Timer();
    dimondSponer();




}

function dimondSponer() {
    var diamond1 = createSprite(64, 98, 20, 10);
    diamond1.addImage(diamondImg);
    diamond1.scale = 0.03;

    var diamond2 = createSprite(250, 655, 20, 10);
    diamond2.addImage(diamondImg);
    diamond2.scale = 0.03;

    var diamond3 = createSprite(1004, 410, 20, 10);
    diamond3.addImage(diamondImg);
    diamond3.scale = 0.03;

    var diamond4 = createSprite(126, 313, 20, 10);
    diamond4.addImage(diamondImg);
    diamond4.scale = 0.03;

    var diamond5 = createSprite(600, 450, 20, 10);
    diamond5.addImage(diamondImg);
    diamond5.scale = 0.03;

    diamondGroup.add(diamond1);
    diamondGroup.add(diamond2);
    diamondGroup.add(diamond3);
    diamondGroup.add(diamond4);
    diamondGroup.add(diamond5);

}







function keyPressed() {
    if (keyCode == 38) {
        pc.velocityY = -(pcvelocityY + speedUpReward);
        pc.changeAnimation("walk")
        pc.rotation = 180 + 90;
        pc.velocityX = 0;

    }
    if (keyCode == 40) {
        pc.velocityY = (pcvelocityY + speedUpReward);
        pc.rotation = 90;
        pc.changeAnimation("walk");
        pc.velocityX = 0;

    }

    if (keyCode == 37) {
        pc.velocityX = -(pcvelocityX + speedUpReward);
        pc.rotation = 180;
        pc.changeAnimation("walk");
        pc.velocityY = 0;


    }
    if (keyCode == 39) {
        pc.velocityX = (pcvelocityX + speedUpReward);
        pc.rotation = 0;
        pc.changeAnimation("walk");
        pc.velocityY = 0;

    }

    if (keyCode == 32) {
        pc.velocityX = 0;
        pc.velocityY = 0;
    }


}

function createWalls() {
    var Topwall = createSprite(width / 2, 0, width, 10);
    var Bottomwall = createSprite(width / 2, windowHeight, width, 10);
    var Leftwall = createSprite(0, width / 2, 10, width);
    var Rightwall = createSprite(width, width / 2, 10, width);




    walls.add(Topwall);
    walls.add(Bottomwall);
    walls.add(Leftwall);
    walls.add(Rightwall);
}


// function mouseClicked() {
//     console.log("mouse" + mouseY);

//     var xOffset = (pc.x - mouseX);
//     var yOffset = (pc.y - mouseY);
//     if (abs(xOffset) > abs(yOffset)) {
//         if (pc.x > mouseX) {
//             pc.velocityX = -getPcvelocityX();
//             pc.velocityY = getPcvelocityY();
//             pc.rotation = 0;
//             pc.changeAnimation("walk")
//         } else {
//             pc.velocityX = 4;
//             pc.velocityY = 0;
//             pc.rotation = 180;
//             pc.changeAnimation("walk")
//         }
//     } else {
//         if (pc.y > mouseY) {
//             pc.velocityY = -4;
//             pc.velocityX = 0;
//             pc.rotation = 90;
//             pc.changeAnimation("walk")
//         } else {
//             pc.velocityY = 4;
//             pc.rotation = 180 + 90;
//             pc.velocityX = 0;
//             pc.changeAnimation("walk")
//         }
//     }
// }





function createDangerousMovement() {
    for (var i = 1; i <= 4; i++) {
        var dobs = createSprite(15, 15, 10, 10);
        dobs.x = random(10, width - 10);
        dobs.y = random(10, height - 10);

        dobs.velocityX = random(3, 4);
        dobs.velocityY = random(3, 4);

        dGroup.add(dobs);

    }



}



function createReward() {
    var reward = createSprite(220, 314, 10, 10);
    reward.addImage(rewardImg2);
    reward.scale = 0.5;
    reward.setCollider("circle", 0, 0, 65);
    reward.debug = false;

    var reward1 = createSprite(1171, 314, 10, 10);
    reward1.addImage(rewardImg2);
    reward1.scale = 0.5;
    reward1.setCollider("circle", 0, 0, 65);
    reward1.debug = false;


    reward.shapeColor = 'red';
    reward1.shapeColor = 'red';


    rewardGroup.add(reward);
    rewardGroup.add(reward1);



}





function getPcvelocityX() {
    if (pcvelocityX > 0) {
        pcvelocityX = pcvelocityX + speedUpReward;
    } else {
        pcvelocityX = pcvelocityX - speedUpReward;
    }
}

function getPcvelocityY() {
    if (pcvelocityY > 0) {
        pcvelocityY = pcvelocityY - speedUpReward;
    } else {
        pcvelocityY = pcvelocityY + speedUpReward;
    }

}

function Timer() {
    textAlign(CENTER, CENTER);
    textSize(100);
    fill("white");
    stroke("black");
    text(timer, width / 2, height / 6);


    if (frameCount % 20 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer--;
    }
    if (timer <= 0) {
        // text("GAME OVER", width/2, height*0.7);
        gameState = "END";
    }

}

function createMovingWall() {
    var wall1 = createSprite(0, height / 2, 150, 20);
    wall1.velocityX = 5;
    // var wall1 = createSprite(0,width/2,500,1000);
    movingWallGroup.add(wall1);
}



function gameOver() {
    swal({
            title: `Game Over!!!`,
            text: "Thanks for playing!!",
            imageUrl: "data:image/jpeg;base64,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",
            imageSize: "150x150",
            confirmButtonText: "Play Again"
        },
        function(isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    );
}

window.addEventListener('mousemove', (e) => {
    console.log(e)
})