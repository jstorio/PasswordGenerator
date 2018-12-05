//initial groundwork for Password Generator

function generatePassword() {
    
    var length = 8,
    	charsetLower = "abcdefghijklmnopqrstuvwxyz",
        charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        charsetNum = "0123456789",
        charsetSpec = "@%+?/'!#$^?:,()[]{}~-.",
        retVal = "";
    for (var i = 0, n = charsetLower.length; i < 2; i++) {
    	retVal += charsetLower.charAt(Math.floor(Math.random() * n));
    	console.log(i);
    }
    for (var i = 0, n = charsetUpper.length; i < 2; i++) {
    	retVal += charsetUpper.charAt(Math.floor(Math.random() * n));
    	console.log(i);
    }
    for (var i = 0, n = charsetNum.length; i < 2; i++) {
    	retVal += charsetNum.charAt(Math.floor(Math.random() * n));
    	console.log(i);
    }
    for (var i = 0, n = charsetSpec.length; i < 2; i++) {
    	retVal += charsetSpec.charAt(Math.floor(Math.random() * n));
    	console.log(i);
    }

    var shuffled = retVal.split('').sort(function(){return 0.5-Math.random()}).join('');
    document.getElementById("generated").value = shuffled;
    copyText();
    showCopiedSnackbar();
    
}

function copyText() {
	var text = document.getElementById("generated");
    text.select();
    document.execCommand("copy"); 
}

function showCopiedSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
} 