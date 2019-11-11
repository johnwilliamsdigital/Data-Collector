
var entries = [];


//VARIABLES
	var addtext1 = document.getElementById("button-1");
	var addtext2 = document.getElementById("button-2"); 
	var addtext3 = document.getElementById("button-3"); 
	var text1 = document.getElementById("text-1");
	var text2 = document.getElementById("text-2");
	var text3 = document.getElementById("text-3");



//PRINT-TEXT
	document.getElementById("output").innerHTML ="";


//Button 1
	addtext1.onclick = function(){
		entries.push (text1.value);
		document.getElementById("output").innerHTML=entries.join(", ");

	};


//Button 2
	addtext2.onclick = function(){
		entries.push (text2.value);
		document.getElementById("output").innerHTML=entries.join(", ");

	};


//Button 3
	addtext3.onclick = function(){
		entries.push (text3.value);
		document.getElementById("output").innerHTML=entries.join(", ");

	};
