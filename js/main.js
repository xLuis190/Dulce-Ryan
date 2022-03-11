var app = document.getElementById('location');


var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});


typewriter.pauseFor(3000).typeString("St Jude Shrine <br>")
typewriter.pauseFor(1000).typeString(`Saturday `)
typewriter.pauseFor(1000).typeString(`05/21/2022`).start()



$(document).ready(() =>{
    $('.parallax').parallax()
    $('.materialboxed').materialbox()
})