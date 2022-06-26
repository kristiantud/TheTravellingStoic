

const elementVideos = $("video").get();


for (let x = 0; x < elementVideos.length; x++){
    elementVideos[x].on('mouseenter',function(){
        elementVideos[x].get(0).play();
    });

    elementVideos[x].on('mouseleave',function(){
        elementVideos[x].get(0).pause();
    });
};