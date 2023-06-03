let copyCodebtn = document.getElementsByClassName("copy-code-btn");
let codeBlock = document.querySelector("code");
let clipboard = new ClipboardJS(copyCodebtn, {
    target: function() {
        return codeBlock;
    }
}
)

function jquery_fade() {
    $("#fade_img").fadeToggle();
}