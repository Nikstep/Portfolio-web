//Preset visibility to hidden to avoid initial flash(Curently disabeled because of animation)
// TweenLite.set(".drop", {visibility: visible"});
//Randomly generated speed 1-10 function and implemented repeat on complete, so second run of animation will have again different speed
function randomSpeedGenerator(array, start, end) {
    TweenLite.fromTo(array, Math.floor((Math.random() * 10) + 1), { y: start }, { y: end,
        ease: Linear.easeNone, 
        onComplete: randomSpeedGenerator,
        onCompleteParams: [array, start, end]
        }).delay(2);
}
//Array of paths divided into groups with set direction (top or down)
const dropsDown = [".drop3", ".drop4", ".drop6", ".drop7", ".drop9", ".drop10", ".drop11", ".drop13", ".drop14", ".drop16", ".drop18", ".drop19", ".drop20"]
.forEach(e => randomSpeedGenerator(e, -1080, 1080)); 
const dropsUp = [".drop1", ".drop2", ".drop5",".drop8", ".drop12", ".drop15", ".drop17", ".drop21"]
.forEach(e => randomSpeedGenerator(e, 1080, -1080));

//Menu and footer behave on page scroll
  var menu = document.querySelector(".sticky-menu"),
    menuTop = menu.offsetTop,
    footer = document.querySelector(".sticky-footer");

    function fixMenu() {
        if(window.scrollY >= menuTop) {
            document.body.style.paddingTop = menu.offsetHeight + 'px';
            document.body.classList.add("fixer"); //Main menu will become sticky on scroll
            document.body.classList.add("fader"); //Footer will fade out on scroll
        }
        else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove("fixer"); //Main menu resticks to top of home page when offset is lower that its size
            document.body.classList.remove("fader"); //Footer becomes visible. 

        }
    }

    window.addEventListener("scroll", fixMenu); //Exe

//Typewriter animation - because its 2 line animation with different widths of elements, part of it is wrapped in container.
var head = document.getElementById("hone");
setTimeout( function() {
    head.style.border = "none";
}, 3500); //after animation is done with first line, this function will hide typewriter blinking border. 

//Autoexpanding textarea in contact form
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var ta = this;
  setTimeout(function(){
    ta.style.cssText = 'height:auto; padding:0';
    ta.style.cssText = 'height:' + ta.scrollHeight + 'px';
  },0);
}

//

