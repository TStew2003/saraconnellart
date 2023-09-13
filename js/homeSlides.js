var i = 0; 
var images = [];
var time = 3000;

images[0] = '../images/IMG_6661.JPG';
images[1] = '../images/IMG_2107.jpeg';
images[2] = '../images/IMG_2117.jpeg';
images[3] = '../images/IMG_7769.JPG';
images[4] = '../images/IMG_0557.jpeg';
images[5] = '../images/IMG_9823.jpg.jpeg';




function changeImg(){
    document.slide.src = images[i];


    if(i < images.length - 1){
        i++;
    }
    else {
        i = 0; 
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;