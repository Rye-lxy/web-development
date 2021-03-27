window.onload = function() {
    window.onscroll = function() {
        var left = document.querySelector("div.left-box");
        if (document.documentElement.scrollTop >= 34) {
            left.setAttribute("class", "left-box left-fixed");
        } else {
            left.setAttribute("class", "left-box")
        }
    }
}    
