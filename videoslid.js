let videoSlideE1=document.querySelectorAll(".video-slide");
console.log(videoSlideE1);
videoSlideE1.forEach(function(video){

    video.addEventListener("click",function(){
        //alert("click me");
        video.classList.toggle("active");
    })
})