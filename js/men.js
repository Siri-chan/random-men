const config = {
    "db_url": "https://raw.githubusercontent.com/Siri-chan/men/numbered/",
    "image_discriminator": "man"
}
const url = config.db_url;
const discrim = config.image_discriminator;
let files;
{
let jpgs = scanImgs('jpg');
let pngs = scanImgs('png');
files = joinArrays([jpgs, pngs]); 
}
let generated = false;
let generationCount = 0;
function regenerate() { 
    let man = document.getElementById("man")
    generationCount++;
    document.getElementById("btn").textContent = "Generate your " + formatTH(generationCount + 1) + " " + discrim + "?"
    if (() => { try { document.createEvent("TouchEvent"); } catch (e) { return false; } return true; }) {
        window.location.replace("./touch.html");
        return;
    }
    man.innerHTML = "<img src=\"" + pickMan() + "\"height=" + (window.innerHeight - window.innerHeight / 3) + ">"
    if (!generated) generated = true;
}
function scanImgs(ext) {
    var imgArr = new Array();

    for(i = 0; i != -1; i++){

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = url + i + '.' + ext;

    }
    function fExists() {
        imgArr.push(img.src);
    }
    function fDoesntExist() {
        return imgArr;
    }
}
function joinArrays(arrays){
    let arr = new Array();
    arrays.forEach(element => {
        element.forEach(item => {
            arr.push(item);
        })
    });
}
function pickMan() {
    //using https://raw.githubusercontent.com/Siri-chan/men/main/<title>.jpg
    //Math.floor is zero-inclusive
    let img = files[Math.floor(Math.random() * files.length)];
    console.log(img);
    return url + img;
}
function formatTH(number) {
    switch (number % 10) {
        case 1:
            if (number == 11) return "11th"
            return number + "st";
        case 2:
            if (number == 12) return "12th"
            return number + "nd";
        case 3:
            if (number == 13) return "13th"
            return number + "rd";
        default:
            return number + "th";
    }
}