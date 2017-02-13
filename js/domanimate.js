var funcs = [],
    timer;

funcs.push (function() { document.getElementsByTagName("MAIN")[0].style.backgroundColor="#587058"; });
funcs.push (function() { document.getElementsByTagName("SECTION")[0].style.backgroundColor="#705858" });
funcs.push (function() { document.getElementById("my").style.visibility="visible" });
funcs.push (function() { document.getElementsByTagName("P")[1].style.visibility="visible" });
funcs.push (function() { document.getElementById("a").src="../media/b.png" });

timer = setInterval(function() {
    funcs.shift()();
    if (!funcs.length) {
        clearInterval (timer);
    }
}, 1500);
