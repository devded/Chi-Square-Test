// Future JavaScript will go here
 var observed = new Array();
			var expected = new Array();
			var temporary = new Array();
            
            function pushData()
            {
                // get value from the input text
                var inputObserved = parseFloat(document.getElementById('inputObserved').value,10);
				
				var inputExpected = parseFloat(document.getElementById('inputExpected').value,10);
                
                // append data to the array
               observed.push(inputObserved);
			   
			   expected.push(inputExpected);
			   
				
                document.getElementById('inputObserved').value="";
				 document.getElementById('inputExpected').value="";
				
                var oval = "";
				var eval = "";
                
                for(i = 0; i < observed.length; i++)
                {
                   oval = oval + observed[i] + "<br/>";
				   eval = eval + expected[i] + "<br/>";
                }
				
				
				
				
                // display array data
                document.getElementById('odata').innerHTML = oval;
				
				document.getElementById('edata').innerHTML = eval;
            }
	