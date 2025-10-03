let arrImg = document.querySelectorAll("img");
let imgIndex = 0;

showImage();
function showImage() {
    if(imgIndex >= arrImg.length) {
        imgIndex = 0;
    } else if (imgIndex < 0) {
        imgIndex = arrImg.length - 1;
    }

    arrImg.forEach(img => {
        img.classList.remove("showImg");
    });
    arrImg[imgIndex].classList.add("showImg");
}

function showPrev() {
    imgIndex--;
    showImage();
}

function showNext() {
    imgIndex++;
    showImage();
}
