var funcs = [],
    timer;

funcs.push (function() { document.getElementsByTagName("MAIN")[0].style.backgroundColor="#587058"; });
funcs.push (function() { document.getElementsByTagName("SECTION")[0].style.backgroundColor="#705858" });
funcs.push (function() { document.getElementById("my").style.visibility="visible" });
funcs.push (function() { document.getElementsByTagName("P")[1].style.visibility="visible" });
funcs.push (function() { document.getElementById("car").src="https://blog.caranddriver.com/wp-content/uploads/2015/11/Porsche-Macan-S1.jpg" });

timer = setInterval(function() {
    funcs.shift()();
    if (!funcs.length) {
        clearInterval (timer);
    }
}, 1500);
