var j = jQuery.noConflict();
var defaultPagePath='app/pages/';
var headerMsg = "Expenzing";
var pgRef;
var headerBackBtn;
j(document).ready(function(){ 
document.addEventListener("deviceready",loaded,false);
});


 function init() {
		headerBackBtn=defaultPagePath+'headerHtml.html';
		pgRef=defaultPagePath+'HomePage/'+'homePage.html';
	
	/*j('#mainHeader').load(headerBackBtn);*/
		j('#mainContainer').load(pgRef);

 }
 
  function loaddate(){
	j(function(){
		window.prettyPrint && prettyPrint();
		j('.dp1').datepicker({
			format: 'dd-mm-yyyy'
		});		
	});

	j('.dp1').on('changeDate', function(ev){
		j(this).datepicker('hide');
	});

}
 

function isJsonString(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}
				
 

function getFormattedDate(input){
    var inputDate=input.split('-');
    var month = inputDate[1];
    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return inputDate[0]+"-"+months[(month-1)]+"-"+inputDate[2];
   
}

function getDisplayAyurvedaList(){
	headerBackBtn=defaultPagePath+'headerHtml.html';
		pgRef=defaultPagePath+'/'+'index.html';
	
	j('#mainHeader').load(headerBackBtn);
		j('#mainContainer').load(pgRef);

	appPageHistory.push(headerBackBtn);
}

