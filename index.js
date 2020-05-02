window.addEventListener("load",() =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const color = [
     "#60d394",
     "#d36060",
    "#c4c060",
    "#196e20",
    "rgb(230, 119, 220)",
    "#311bad" 
    ];

    //do some sound function
    pads.forEach((pad,index) =>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    //create function make bubble when clicking in the sounds
    const createBubble = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    };
});