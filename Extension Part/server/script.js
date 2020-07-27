var observed = new Array();
var expected = new Array();
var temporary = new Array();
var observedChi = 0;


function pushData() {
	// get value from the input text
	var inputObserved = parseFloat(document.getElementById('inputObserved').value, 10);

	var inputExpected = parseFloat(document.getElementById('inputExpected').value, 10);

	// append data to the array
	observed.push(inputObserved);

	expected.push(inputExpected);


	document.getElementById('inputObserved').value = "";
	document.getElementById('inputExpected').value = "";

	var oval = "";
	var eval = "";

	for (i = 0; i < observed.length; i++) {
		oval = oval + observed[i] + "<br/>";
		eval = eval + expected[i] + "<br/>";
	}




	// display array data
	document.getElementById('odata').innerHTML = oval;

	document.getElementById('edata').innerHTML = eval;
}



function chiCal() {

	for (i = 0; i < observed.length; i++) {
		temporary[i] = observed[i] - expected[i];
		temporary[i] = temporary[i] * temporary[i];
		temporary[i] = temporary[i] / expected[i];
		observedChi = observedChi + temporary[i];

	}


	document.getElementById('observedChi').value = observedChi;
	
	


}

 function chiCheck(){
 	var significantChi = parseFloat(document.getElementById('inputSignificantChi').value, 10);


 	if (observedChi < significantChi) {
 		alertify.success("Accepted");

 	} else {
		alertify.error("Rejected");

	}
}