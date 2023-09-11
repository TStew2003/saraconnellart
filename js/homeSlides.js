var i = 0; 
var images = [];
var time = 3000;

images[0] = '../images/IMG_0009.jpg';
images[1] = '../images/IMG_0027.JPG';
images[2] = '../images/IMG_2117.jpeg';
images[3] = '../images/IMG_2116.jpeg';
images[4] = '../images/IMG_2114.jpeg';
images[5] = '../images/IMG_2113.jpeg';
images[6] = '../images/IMG_2112.jpeg';



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