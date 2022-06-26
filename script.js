const fonts = [
    "Cabin Sketch, cursive",
    "Caveat Brush, cursive",
    "Gloria Hallelujah, cursive",
    "Jost, sans-serif",
    "Nanum Pen Script, cursive"
]

// var randomNumber = 0;
// const heroTitle = document.getElementById("hero_title");
// var randomNumberPicker = window.setInterval(function(){
//     heroTitle.style.fontFamily = fonts[randomNumber];
//     if (randomNumber == 4){
//         randomNumber = 0;
//     } else {
//         randomNumber++;
//     }
    
// },250);


var montreal = $("#montreal_video");
var toronto = $("#toronto_video");
var calgary = $("#calgary_video");
const elementVideos = [
    montreal,toronto,calgary
];

for (let x = 0; x < elementVideos.length; x++){
    elementVideos[x].on('mouseenter',function(){
        elementVideos[x].get(0).play();
    });

    elementVideos[x].on('mouseleave',function(){
        elementVideos[x].get(0).pause();
    });
};

var screenWidth = window.screen.width;

if (screenWidth <= 500){
    for (let x=0;x<elementVideos.length;x++){
        elementVideos[x].get(0).play();
    }
}
// figure.on('mouseenter', function(){
//     figure.get(0).play();
// });

// figure.on('mouseleave', function(){
//     figure.get(0).pause();
// })


