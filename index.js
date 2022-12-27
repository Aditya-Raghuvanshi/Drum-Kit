
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrums;i++)
{
     document.querySelectorAll(".drum")[i].addEventListener("click",handleCLick); // note only name of the function will be written.
}
// above all the button of drum has been added in the event Listener and type of event is click ,,,[i] is used bcz array is returned.

//detecting mouse press .

function handleCLick()
{
  var innerHtml = this.innerHTML;
  makeSound(innerHtml);
  buttonAnimation(innerHtml);
}

//detecting keyboard press .

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch(key){

    case "w":
    var audio = new Audio("crash.mp3");
    audio.play();
    break;

    case "a":
    var audio = new Audio("kick-bass.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("snare.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("tom-1.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("tom-2.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("tom-3.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("tom-4.mp3");
    audio.play();
    break;

    default:
    alert(innerHtml);
    break;
  }
}

function buttonAnimation(currentkey)
{
    var activeButton = document.querySelector("." + currentkey);  //correspoding button get selected .

    activeButton.classList.add("pressed");
    setTimeout(function (){
       activeButton.classList.remove("pressed");
    },100);  //   class will be removed after 0.1 sec.

}
