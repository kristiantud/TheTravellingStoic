

const elementVideos = document.getElementsByTagName('video');

console.log(elementVideos);

for (let x = 0; x < elementVideos.length; x++){
    // elementVideos[x].get[0].on('mouseenter',function(){
    //     elementVideos[x].get[0].play();
    // });

    // elementVideos[x].get[0].on('mouseleave',function(){
    //     elementVideos[x].get[0].pause();
    // });

    elementVideos[x].addEventListener("mouseover",function(){
        this.play();
        hovered = true;
        changePlayStatusDesktop(x);
        
    })
    elementVideos[x].addEventListener("mouseleave",function(){
        this.pause();
        hovered = false;
        changePlayStatusDesktop(x);
    })
};

var screenWidth = window.screen.width;
var clicked = false;
var hovered = false;

// get the pause, play buttons
var pause = document.getElementsByClassName("buttons pause");
var play = document.getElementsByClassName("buttons play");

for (let y = 0; y < pause.length; y++){
    pause[y].style.display = "initial";
}




for (let x=0;x<elementVideos.length;x++){
    elementVideos[x].pause();
    elementVideos[x].addEventListener("click",function(){
        if (!clicked){
            this.play();
            clicked = true;
            changePlayStatus(x);
            
        } else {
            this.pause();
            clicked = false;
            changePlayStatus(x);
        }
    });
}


function changePlayStatus(symbolIndex){
    for (let x = 0; x < pause.length; x++){
        if (x == symbolIndex){
            if (!clicked){
                pause[x].style.display = "initial";
                play[x].style.display = "none";
            } else {
                pause[x].style.display = "none";
                play[x].style.display = "initial";
            }
        }
        
        
    }
    
}

function changePlayStatusDesktop(symbolIndex){
    for (let x=0; x< pause.length; x++){
        if (x == symbolIndex){
            if (!hovered){
                pause[x].style.display = "initial";
                play[x].style.display = "none";
            } else {
                pause[x].style.display = "none";
                play[x].style.display = "initial";
            }
        }
    }
}