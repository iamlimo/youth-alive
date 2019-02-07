window.onload = changeItem;

var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/image1.jpg';
images[1] = 'img/image2.png';
images[2] = 'img/image3.png';

function changeItem(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    
    setTimeout("changeItem()", time)
}


function popUp(){
    var popContainer = document.getElementById("pop-up");
    popContainer.style.visibility = "hidden";
}

popUp();

setTimeout(function(){
    var popContainer = document.getElementById("pop-up");
    popContainer.style.visibility = "visible";
}, 5000)

function closepop(){
    var close = document.getElementById("close");
    
    close.addEventListener("click", popUp )
}

closepop()