const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){


    fulImgBox.style.display = "flex";
    fulImg.src = reference

    high=fulImg.height;
    long=fulImg.width;

    if (high>long) {
        fulImg.style.height = "90vh";
        fulImg.style.width = "auto";

    }
     else{
        if (long/1.5>high) {
        fulImg.style.width = "160vh";
        fulImg.style.height = "auto";
        }
        else{
        fulImg.style.width = "100vh";
        fulImg.style.height = "auto";
        }

    }

}
function closeImg(){
    fulImgBox.style.display = "none";
}
