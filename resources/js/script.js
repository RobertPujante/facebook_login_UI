feather.replace();

function screenResolution(){
    let resolution = document.getElementsByClassName('snippet-size');
    
    for (let i = 0; i < resolution.length; i++) {
        resolution[i].setAttribute('width', window.screen.width * window.devicePixelRatio);
        resolution[i].setAttribute('height', window.screen.height * window.devicePixelRatio);   
    }
}

screenResolution();

function showCode(button, preview, hide){
    button.classList.add('active');
    let btnPreview = button.previousElementSibling;
    btnPreview.classList.remove('active');
    document.getElementById(preview).classList.add('show-code');
    document.getElementById(hide).classList.add('hide');
}

function preview(button, show, hide){
    button.classList.add('active');
    let btnCode = button.nextElementSibling;
    btnCode.classList.remove('active');
    document.getElementById(show).classList.remove('show-code');
    document.getElementById(hide).classList.remove('hide');
}