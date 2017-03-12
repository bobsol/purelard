var funcs = [],
    timer;

funcs.push (function() { 
    document.getElementById("my").style.visibility="visible";
});

funcs.push (function() { 
    document.getElementsByTagName("MAIN")[0].style.backgroundColor="#587058"; 
});

funcs.push (function() { 
    document.getElementsByTagName("SECTION")[0].style.backgroundColor="#705858";
    document.getElementById("my").style.color="#dcdcdc";
});

funcs.push (function() { 
    fade(document.getElementById("a"), document.getElementById("b"));
});

timer = setInterval(function() {
    funcs.shift()();
    if (!funcs.length) {
        clearInterval (timer);
    }
}, 2000);

function fade (firstObject, secondObject, fadeTime) {
    if (fadeTime === undefined) {
        fadeTime = 5000;
    }
    var count = 1,
    timer = setInterval(function() {
      /* step the fade */
      count -= .01;
      firstObject.style.opacity=count;
      secondObject.style.opacity=1 - count;
      if (count <= 0) {
	  clearInterval (timer);
      }
    }, fadeTime/100);
}
