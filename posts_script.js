

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
        
    })
    elementVideos[x].addEventListener("mouseleave",function(){
        this.pause();
    })
};