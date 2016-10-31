var appPageHistory=[];
var AppRate, Locales, exec;

function goBack() {
		//To check if the page that needs to be displayed is login page. So 'historylength-2'
		var historylength=appPageHistory.length;
		console.log("historylength0 "+historylength);
		var goToPage=appPageHistory[historylength-2];
		console.log("historylength1 "+historylength);

		 if(historylength==1){

			console.log("historylength inside if "+appPageHistory.length);
			
			headerBackBtn=defaultPagePath+'headerHtml.html';
			pgRef=defaultPagePath+'HomePage/'+'homePage.html';
	
			j('#mainHeader').load(headerBackBtn);
			j('#mainContainer').load(pgRef);
			//reset
			appPageHistory=[];
			console.log("historylength inside if afeter reset"+appPageHistory.length);
		}else {

		}
	
	}
 
function goBackEvent() {
		//To check if the page that needs to be displayed is login page. So 'historylength-2'
		var historylength=appPageHistory.length;
		//alert("historylength0 "+historylength);
		var goToPage=appPageHistory[historylength-2];
		//alert("historylength1 "+historylength);
		
		 if(historylength==1){
		
			console.log("historylength inside if "+appPageHistory.length);
			
			headerBackBtn=defaultPagePath+'headerHtml.html';
			pgRef=defaultPagePath+'HomePage/'+'homePage.html';
	
			j('#mainHeader').load(headerBackBtn);
			j('#mainContainer').load(pgRef);
			//reset
			appPageHistory=[];
		//alert("historylength inside if afeter reset"+appPageHistory.length);
		return 1;
		}else {
			alert("return 2");
		return 2;
		}
		
}

function onConfirmExit(button) {
	
    if (button == 2) { //If User select a No, then return back;
        return;
    } else {
        navigator.app.exitApp(); // If user select a Yes, quit from the app.
    }
}


