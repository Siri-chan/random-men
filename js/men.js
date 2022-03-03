const config = {
    'db_url': "https://raw.githubusercontent.com/Siri-chan/men/numbered/",
    'image_discriminator': "man",
};

const url = config.db_url;
const discrim = config.image_discriminator;

function scanImgs(ext) {
    let imgArr = [];
    let checkExist = false;
    let i = 0;
    function fDoesntExist() { checkExist = true; }

    while (!checkExist) {
        let img = new Image();
        img.onload = () => imgArr.push(img.src);
        img.onerror = fDoesntExist;
        img.src = `${url}${i}.${ext}`;
        i += 1;
    }
    return imgArr;
}
function joinArrays(arrays) {
    let arr = [];
    arrays.forEach((element) => {
        element.forEach((item) => {
            arr.push(item);
        });
    });
}
const jpgs = scanImgs('jpg');
const pngs = scanImgs('png');
const files = joinArrays([jpgs, pngs]);
let generated = false;
let generationCount = 0;

function pickMan() {
    // using https://raw.githubusercontent.com/Siri-chan/men/main/<title>.jpg
    // Math.floor is zero-inclusive
    const img = files[Math.floor(Math.random() * files.length)];
    console.log(img);
    return url + img;
}
function formatTH(number) {
    switch (number % 10) {
        case 1:
            if (number === 11) return "11th";
            return `${number}st`;
        case 2:
            if (number === 12) return "12th";
            return `${number}nd`;
        case 3:
            if (number === 13) return "13th";
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}
function regenerate() {
    const man = document.getElementById("man");
    generationCount += 1;
    document.getElementById("btn").textContent = `Generate your ${formatTH(generationCount + 1)} ${discrim}?`;
    if (() => { try { document.createEvent("TouchEvent"); } catch (e) { return false; } return true; }) {
        window.location.replace("./touch.html");
        return;
    }
    man.innerHTML = `<img src="${pickMan()}" height=${(window.innerHeight - window.innerHeight / 3)}>`;
    if (!generated) generated = true;
}
