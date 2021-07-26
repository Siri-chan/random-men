window.onload = () => {
    const d = new Date();
    function formatDate(date) { 
        var year = date.getFullYear();
        var month = date.getMonth() + 1; // In the wacky land of JavaScript, months start at 0, not 1;
        var day = date.getDate();
        var result = year + padString(month) + padString(day);
        return result;
    }
    function padString(value, padding) {
        padding = padding || 2;
        var string = value.toString();
        while (string.length < 2) {
            string = '0' + string;
        }
        string = "-" + string;
        return string;
    }
    var dateText = "Site loaded @: " + formatDate(d)
    var htmlFoot = "<footer> \
            <div class=\"footr\"> \
                <div class=\"row\"> \
                    <div class=\"col\"> \
                        <p>  Created by Siri</p></div> \
                    <div class=\"col\"> \
                        <div id=\"i\"></div> \
                    </div> \
                    <div class=\"col\"></div> \
                    <div class=\"col\" style=\"text-align: right;\"><a href=\"resources.html\">Resources  </a></div> \
                </div> \
            </div> \
        </footer>" 
        //feel free to put your name in the footer
    /*if (!isMobile()) document.getElementById("f").innerHTML = htmlFoot; 
    else document.getElementById("f").innerHTML = "<h3 style=\"text-align: center\"> Notice! </h3> \
    <p style=\"text-align: center\">This Site isn't designed for mobile, and I dont really have intentions of improving it substantially. Sorry!</p>" */
    var htmlDate = "<p>"+ dateText + "</p>"
    console.log(dateText);
    //document.getElementById("i").innerHTML = htmlDate;
    //sorry mobile users i'll fix this to not be shit later
    var htmlHead;
    if(isMobile()){
        htmlHead = "<header> <div class=\"headr\"> <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\"> <ul class=\"navbar-nav\"> \
        <li> <a class=\"navbar-brand\" href=\"https://siri-chan.github.io\"> <img src=\"./img/logo.svg\" alt=\"logo\" style=\"width:38px;\"><a href=\"https://siri-chan.github.io\">Created by Siri @ siri-chan.github.io</a>&nbsp&nbsp&nbsp&nbsp</a> \
        </li> </ul> </nav> </div> </header>"
    } else {
        htmlHead = "<header> <div class=\"headr\"> <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\"> <ul class=\"navbar-nav\"> \
        <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li> \
        <a class=\"navbar-brand\" href=\"https://siri-chan.github.io\"> <img src=\"./img/logo.svg\" alt=\"logo\" style=\"width:38px;\"> </a> \
        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://siri-chan.github.io\">Created By Siri</a> </li> \
        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://siri-chan.github.io\">@ siri-chan.github.io</a> </li> \
        <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li> </ul> </nav> </div> </header>"
    }
    document.getElementById("h").innerHTML = htmlHead;
}
function e_noMusic(){
    alert("Nothing here, still in production.");
    return;
}
function isMobile() {
    try { document.createEvent("TouchEvent"); return true; }
    catch (e) { if($('#some-element').css('display') == 'none'){return true;} return false; }
}