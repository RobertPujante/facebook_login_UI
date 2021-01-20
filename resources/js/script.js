feather.replace();

function screenResolution(){
    let resolution = document.getElementsByClassName('snippet-size');
    
    for (let i = 0; i < resolution.length; i++) {
        resolution[i].setAttribute('width', window.screen.width * window.devicePixelRatio);
        resolution[i].setAttribute('height', window.screen.height * window.devicePixelRatio);   
    }
}

screenResolution();