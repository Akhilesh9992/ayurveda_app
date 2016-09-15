var appPageHistory=[];
var jsonToBeSend=new Object();
var jsonBEArr = [];
var budgetingStatus;
var AppRate, Locales, exec;



var app = {
    // Application Constructor
    initialize: function() {
		this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		document.addEventListener("deviceready", this.onDeviceReady, false);
    },
	onDeviceReady: function() {
       		  if (navigator.notification) { // Override default HTML alert with native dialog
			  window.alert = function (message) {
				  navigator.notification.alert(
					  message,   	 // message
					  null,       	// callback
					  "Alert", 	   // title
					  'OK'        // buttonName
				  );
			  };
		  }
		  document.addEventListener("backbutton", function(e){
			 goBackEvent();
		  }, false);
		  validateValidMobileUser();
		  
		  },

	receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



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

function onConfirmExit(button) {
    if (button == 2) { //If User select a No, then return back;
        return;
    } else {
        navigator.app.exitApp(); // If user select a Yes, quit from the app.
    }
}


