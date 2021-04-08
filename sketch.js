// function setup() {
//     createCanvas(200, 200);
// }

// function draw() {
//     for(let i = 0; i <= width; i +=10) {
//         line(0, i, width, i);
//     }
// }

// function setup() {
//     createCanvas(200, 200);
// }
// function draw() {
//     let r = 20;
//     for(let i = width ; i >= r; i -= r) {
//             fill(i);
//             ellipse(width / 2, height / 2, i);
//     }
// }

// function setup() {
//   createCanvas(1000, 1000);
//   stroke(1);
// }

// function draw() {
//   background(255);
//   for (let b1 = mouseX; b1 <= 500; b1 += 80) {
//     for (let b2 = mouseY; b2 <= 500; b2 += 80) {
//       ellipse(mouseX, mouseY, b1, b2);
//       fill(b1, b2, b2, 30);
//     }
//   }
// }

// function setup() {
//     createCanvas(200, 200);
//     stroke(10);
//   }
  
//   function draw() {
//     background(255);
//     for (let b1 = 20; b1 <= 200; b1 += 30) {
//       for (let b2 = 20; b2 <= 200; b2 += 30) {
//         ellipse(100, 100, b1, b2);
//         fill(100, 10);
//       }
//     }
//   }

// function setup () {
//     createCanvas(200, 200);
// }
// function draw() {
//     for(let b1 = 0; b1 >= width; b1 -=20) {
//         for(let b2 = 0; b2 >= width; b2 -=20)
//         ellipse(100, 100, b1, b2);
//     }
// }

// let light;
// let x = 50;
// let click = false;

// function setup() {
//     createCanvas(400, 400);
//     background(55, 155, 100);
//     noStroke();
// } 

// function draw() {
//     if (light) {
//         background(255, 255, 0);
//     } else {
//         background(55, 155, 100);
//     }

//     fill(255);
//     arc(50, 50, 50, 50, HALF_PI, TWO_PI - HALF_PI);
//     arc(50 + 100, 50, 50, 50, TWO_PI - HALF_PI, HALF_PI);
//     rect(50, 50 / 2, 100, 50);

//     fill(0);

//     ellipse(x, 50, 50);

    
//     if((mouseX > 50 && mouseX < 150 && mouseY > 25 && mouseY < 75)|| dist(mouseX, mouseY, 50, 50) < 25 ||dist(mouseX, mouseY, 150, 50) < 25 ){
//         if (mouseIsPressed) { 
//             if(!click){
//             x = constrain(mouseX, 50, 150);
//             }
//         }
//     }else {
//         if(mouseIsPressed){
//             click = true;
//         } else {
//             click = false;
//         }
//     } 
//     if (x >= 149) {
//         light = true;
//     } else {
//         light = false;
//     }
// }

// function mousePressed() {
//     click = false;
// }

// //한번 클릭하면 원이 이동해서 알아서 멈추게
// //안에서 드래그하고 밖으로 나갔을 떄 작동되도록 
// //조건들을 섬세하게 조정하는 연습을 많이 하자. 리팩토링에 대한 부분은 나중에. 

// let x = 0;
// let y = 0;
// let speed = 10;
// let state = 0;

// function setup() {
//     createCanvas(800, 800);
// }

// function draw() {
//     background(255);
//     stroke(0);
//     fill(175);
//     rect(x, y, 19, 19);

//     if (state == 0) {
//         x = x + speed;
//         if (x > width - 20) {
//             x = width - 20;
//             state = 1;
//         }
//     } else if (state == 1) {
//         y = y + speed;
//         if (y > height - 20) {
//             y = height - 20;
//             state = 2;
//         }
//     } else if (state == 2) {
//         x = x - speed;
//         if (x < 0) {
//             x = 0;
//             state = 3;
//         }
//     } else if (state == 3) {
//         y = y - speed;
//         if (y < 0) {
//             y = 0;
//             state = 0;
//         }
//     }
// }
let x = 0;
let y = 0;
let easing = 0.05;

function setup(){
    createCanvas(windowWidth, windowHeight);
    

}

function draw() {
    background(3, 244, 252, 1);
    let targetX = mouseX;
    x += (targetX - x) * easing;

    let targetY = mouseY;
    y += ( targetY - y)* easing;

    ellipse(x, y, 100);
}

function windowResized() {
    resizeCanvas(innerWidth, outerHeight);
}