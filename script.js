



document.addEventListener("keydown", (evt) => playSound(evt));
document.addEventListener("click", (evt) => playSound(evt));


 


function playSound(evt){  
    if (evt.key == "1" || evt.target.id ===  "drumDiv1") {
        let sound = document.getElementById("myAudio1");
        sound.play(); 
    }
    
    if (evt.key == "2"|| evt.target.id === "drumDiv2") {
        let sound = document.getElementById("myAudio2");
        sound.play(); 
    }

    if (evt.key == "3"|| evt.target.id === "drumDiv3") {
        let sound = document.getElementById("myAudio3");
        sound.play(); 
    }
    
    if (evt.key == "4"|| evt.target.id === "drumDiv4") {
        let sound = document.getElementById("myAudio4");
        sound.play(); 
    }
    
    if (evt.key == "5"|| evt.target.id === "drumDiv5") {
        let sound = document.getElementById("myAudio5");
        sound.play(); 
    }
    
    if (evt.key == "6"|| evt.target.id === "drumDiv6") {
        let sound = document.getElementById("myAudio6");
        sound.play(); 
    }
    
    if (evt.key == "7"|| evt.target.id === "drumDiv7") {
        let sound = document.getElementById("myAudio7");
        sound.play(); 
    }
    
    if (evt.key == "8"|| evt.target.id === "drumDiv8") {
        let sound = document.getElementById("myAudio8");
        sound.play(); 
    }
    
    if (evt.key == "9"|| evt.target.id === "drumDiv9") {
        let sound = document.getElementById("myAudio9");
        sound.play(); 
    }
    
    if (evt.key == "z"|| evt.target.id === "synthDivZ") {
        let sound = document.getElementById("myAudioZ");
        sound.play(); 
    }
    
    if (evt.key == "x"|| evt.target.id === "synthDivX") {
        let sound = document.getElementById("myAudioX");
        sound.play(); 
    }
    
    if (evt.key == "c"|| evt.target.id === "synthDivC") {
        let sound = document.getElementById("myAudioC");
        sound.play(); 
    }
    
    if (evt.key == "v"|| evt.target.id === "synthDivV"){
        let sound = document.getElementById("myAudioV");
        sound.play(); 
    }
    
    if (evt.key == "b"|| evt.target.id === "synthDivB") {
        let sound = document.getElementById("myAudioB");
        sound.play(); 
    }
    
    if (evt.key == "n"|| evt.target.id === "synthDivN") {
        let sound = document.getElementById("myAudioN");
        sound.play(); 
    }
    
    if (evt.key == "m"|| evt.target.id === "synthDivM") {
        let sound = document.getElementById("myAudioM");
        sound.play(); 
    }

};

