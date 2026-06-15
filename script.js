function toggleSound(soundId){
    const audio = document.getElementById(`audio-${soundId}`);
    const card = document.getElementById(`card-${soundId}`);
    const slider = document.getElementById(`slider-${soundId}`);
    

    if(audio.paused){
        audio.play();
        card.classList.add('active');
        slider.disabled=false;
    }
    else{
        audio.pause();
        card.classList.remove('active');
        slider.disabled=true;
    }
}

function changeVolume(soundId,value){
    const audio = document.getElementById(`audio-${soundId}`);
    /*const card = document.getElementById(`card-${soundId}`);*/

    audio.volume=value;
   /* if(audio.paused && value>0){
        audio.play();
        card.classList.add('active');
    }*/
}