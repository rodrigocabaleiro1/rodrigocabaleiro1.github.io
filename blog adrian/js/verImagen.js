const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){


    fulImgBox.style.display = "flex";
    fulImg.src = reference

    high=fulImg.height;
    long=fulImg.width;

    if (high>long/1.5) {
        fulImg.style.height = "90%";
        fulImg.style.width = "auto";

    }
     else{
        fulImg.style.width = "90%";
        fulImg.style.height = "auto";
        

    }


}
function closeImg(){
    fulImgBox.style.display = "none";
}
