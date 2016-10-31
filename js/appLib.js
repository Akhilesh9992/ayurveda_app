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
		alert("1");
		 if(historylength==1){
		alert("2");
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
			alert("3");
			headerBackBtn=defaultPagePath+'headerHtml.html';
			pgRef=defaultPagePath+'HomePage/'+'homePage.html';
	
			j('#mainHeader').load(headerBackBtn);
			j('#mainContainer').load(pgRef);
			//reset
			appPageHistory=[];
		return 2;
		}
		alert("4");
}

function onConfirmExit(button) {
	var value1 = goBackEvent();
//alert(" or "+value1);
  e.preventDefault();
  
  if(value1 == 1){
    
  }else if(value1 == 2){
    if (button == 2) { //If User select a No, then return back;
        headerBackBtn=defaultPagePath+'headerHtml.html';
			pgRef=defaultPagePath+'HomePage/'+'homePage.html';
	
			j('#mainHeader').load(headerBackBtn);
			j('#mainContainer').load(pgRef);
			//reset
			appPageHistory=[];
        return;
    } else {
        navigator.app.exitApp(); // If user select a Yes, quit from the app.
    }
}
}


